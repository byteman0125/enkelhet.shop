import prisma from '../utils/prisma';
import { initialData } from './seed';

async function main() {
  await Promise.all([
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.series.deleteMany(),
  ]);
  const { series, products } = initialData;
  const seriesData = series.map((serie) => ({
    name: serie,
  }));

  await prisma.series.createMany({
    data: seriesData,
  });

  const seriesDB = await prisma.series.findMany();
  const seriesMap = seriesDB.reduce(
    (map, serie) => {
      map[serie.name.toLowerCase()] = serie.id;
      return map;
    },
    {} as Record<string, string>
  );
  console.log(seriesMap);
}

(() => {
  if (process.env.NODE_ENV === 'production') return;
  main();
})();
