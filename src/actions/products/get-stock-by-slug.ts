'use server';
import prisma from '@/utils/prisma';

export const getStockBySlug = async (slug: string) => {
  try {
    const productStock = await prisma.product.findFirst({
      select: {
        inStock: true,
      },
      where: {
        slug: slug,
      },
    });

    return productStock?.inStock ?? 0;
  } catch (error) {
    return 0;
  }
};
