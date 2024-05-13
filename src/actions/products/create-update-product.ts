'use server';
import { FinishType } from '@/interfaces';
import prisma from '@/utils/prisma';
import { Product, Series } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

cloudinary.config(process.env.CLOUDINARY_URL ?? '');

const productSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  title: z.string().min(3).max(255),
  slug: z.string().min(3).max(255),
  description: z.string(),
  price: z.coerce
    .number()
    .min(0)
    .transform((val) => Number(val.toFixed(2))),
  inStock: z.coerce
    .number()
    .min(0)
    .transform((val) => Number(val.toFixed(0))),
  series: z.nativeEnum(Series),
  finish: z.coerce.string().transform((val) => val.split(',')),
  tags: z.string(),
  measurements: z.any(),
});

export const createUpdateProduct = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const parsedProduct = productSchema.safeParse(data);

  if (!parsedProduct.success) {
    console.log(parsedProduct.error);
    return {
      ok: false,
    };
  }

  const product = parsedProduct.data;
  product.slug = product.slug.toLowerCase().replace(/ /g, '-').trim();
  const { id, measurements, ...rest } = product;

  try {
    const prismaTx = await prisma.$transaction(async () => {
      let product: Product;
      const tagsArray = rest.tags
        .split(',')
        .map((tag) => tag.trim().toLowerCase());

      const measurementData = JSON.parse(measurements, (key, value) => {
        return isNaN(value) ? value : parseFloat(value);
      });

      if (id) {
        product = await prisma.product.update({
          where: {
            id,
          },
          data: {
            ...rest,
            finish: rest.finish as FinishType[],
            tags: {
              set: tagsArray,
            },
          },
        });

        await prisma.measurements.update({
          data: {
            ...measurementData,
          },
          where: {
            id: product.measurementsId,
          },
        });
      } else {
        let measurement = await prisma.measurements.create({
          data: {
            ...measurementData,
          },
        });
        product = await prisma.product.create({
          data: {
            ...rest,
            finish: rest.finish as FinishType[],
            tags: {
              set: tagsArray,
            },
            measurements: {
              connect: { id: measurement ? measurement.id : undefined },
            },
          },
        });
      }
      if (formData.getAll('models')) {
        const models = await uploadModels(formData.getAll('models') as File[]);
        if (!models) {
          throw new Error('model upload failed... rollback');
        }

        await prisma.productModel.createMany({
          data: models.map((model) => ({
            url: model!,
            productId: product.id,
          })),
        });
      }

      if (formData.getAll('images')) {
        const images = await uploadImages(formData.getAll('images') as File[]);
        if (!images) {
          throw new Error('image upload failed... rollback');
        }

        await prisma.productImage.createMany({
          data: images.map((image) => ({
            url: image!,
            productId: product.id,
          })),
        });
      }

      return { productDB: product };
    });

    revalidatePath('/admin/products');
    revalidatePath(`/admin/product/${product.slug}`);
    revalidatePath(`/products/${product.slug}`);

    return {
      ok: true,
      productDB: prismaTx.productDB,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'item creation failed',
    };
  }
};

const uploadModels = async (models: File[]) => {
  try {
    const uploadPromises = models.map(async (model) => {
      try {
        const buffer = await model.arrayBuffer();
        const base64 = Buffer.from(buffer).toString('base64');
        return cloudinary.uploader
          .upload(`data:image/png;base64,${base64}`)
          .then((res) => res.secure_url);
      } catch (error) {
        console.log(error);
        return null;
      }
    });

    const uploadedModels = await Promise.all(uploadPromises);
    console.log(uploadModels);
    return uploadedModels;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const uploadImages = async (images: File[]) => {
  try {
    const uploadPromises = images.map(async (image) => {
      try {
        const buffer = await image.arrayBuffer();
        const base64 = Buffer.from(buffer).toString('base64');
        return cloudinary.uploader
          .upload(`data:image/png;base64,${base64}`)
          .then((res) => res.secure_url);
      } catch (error) {
        console.log(error);
        return null;
      }
    });

    const uploadedimages = await Promise.all(uploadPromises);
    return uploadedimages;
  } catch (error) {
    console.log(error);
    return null;
  }
};
