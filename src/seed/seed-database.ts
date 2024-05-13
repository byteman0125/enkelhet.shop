import prisma from '../utils/prisma';
import { initialData } from './seed';
import { countries } from './seed-countries';

async function main() {
  await prisma.orderAddress.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.userAddress.deleteMany();
  await prisma.user.deleteMany();
  await prisma.country.deleteMany();
  await prisma.productModel.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.measurements.deleteMany();

  const { products, users } = initialData;

  await prisma.user.createMany({
    data: users,
  });

  await prisma.country.createMany({
    data: countries,
  });

  products.forEach(async (product) => {
    const { images, measurements, model, ...rest } = product;

    let dbMeasurements;
    if (measurements) {
      dbMeasurements = await prisma.measurements.create({
        data: measurements,
      });
    }

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        measurements: {
          connect: { id: dbMeasurements ? dbMeasurements.id : undefined },
        },
      },
    });

    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });

    const modelsData =
      model?.map((model) => ({
        url: model,
        productId: dbProduct.id,
      })) || [];

    await prisma.productModel.createMany({
      data: modelsData,
    });
  });

  console.log('Seed executed successfully');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;

  main();
})();
