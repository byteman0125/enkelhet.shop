import prisma from '@/utils/prisma';

interface IPaginationOptions {
  page?: number;
  take?: number;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 6,
}: IPaginationOptions = {}) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    const [products, totalProducts] = await Promise.all([
      prisma.product.findMany({
        take: take,
        skip: (page - 1) * take,
        include: {
          ProductImage: {
            take: 2,
            select: {
              url: true,
            },
          },
        },
      }),
      prisma.product.count({}),
    ]);
    const totalPages = Math.ceil(totalProducts / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("Products can't be loaded");
  }
};
