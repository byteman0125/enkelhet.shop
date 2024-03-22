import prisma from '../utils/prisma';
import { initialData } from './seed';

async function main() {
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();

  const { products } = initialData;

  products.forEach(async (product) => {
    const { images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
      },
    });

    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log('Seed ejecutado correctamente');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;

  main();
})();
