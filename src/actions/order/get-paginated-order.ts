'use server';

import { auth } from '@/auth.config';
import prisma from '@/utils/prisma';

interface IPaginationOptions {
  page?: number;
  take?: number;
}

export const getPaginatedOrder = async ({
  page = 1,
  take = 12,
}: IPaginationOptions) => {
  const session = await auth();

  if (session?.user.role !== 'admin') {
    return {
      ok: false,
      message: 'unauthorized',
    };
  }

  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    const [order, totalOrders] = await Promise.all([
      prisma.order.findMany({
        take: take,
        skip: (page - 1) * take,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          OrderAddress: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      }),
      prisma.order.count(),
    ]);

    const totalPages = Math.ceil(totalOrders / take);
    return {
      currentPage: page,
      totalPages: totalPages,
      orders: order,
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: '500 error',
    };
  }
};
