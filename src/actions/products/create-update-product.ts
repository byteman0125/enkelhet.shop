'use server';
import { FinishType } from '@/interfaces';
import prisma from '@/utils/prisma';
import { Product, Series } from '@prisma/client';
import { z } from 'zod';

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
  console.log(product);
  product.slug = product.slug.toLowerCase().replace(/ /g, '-').trim();
  const { id, ...rest } = product;

  const prismaTx = await prisma.$transaction(async (tx) => {
    let product: Product;
    const tagsArray = rest.tags
      .split(',')
      .map((tag) => tag.trim().toLowerCase());

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
      console.log({ updatedProduct: product });
    } else {
    }
  });

  return {
    ok: true,
  };
};
