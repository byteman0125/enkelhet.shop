import prisma from '../utils/prisma';
import { initialData } from './seed';

async function main() {
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.finish.deleteMany();

  const { categories, products } = initialData;

  const categoriesData = categories.map((name) => ({ name }));

  await prisma.finish.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.finish.findMany();

  const categoriesMap = categoriesDB.reduce(
    (map, category) => {
      map[category.name.toLowerCase()] = category.id;
      return map;
    },
    {} as Record<string, string>
  );

  products.forEach(async (product) => {
    const { finish, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        finishId: categoriesMap[finish],
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
