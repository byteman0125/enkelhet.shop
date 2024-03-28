'use server';
import { auth } from '@/auth.config';
import prisma from '@/utils/prisma';

export const getOrderByUser = async () => {
  const session = await auth();
  if (!session?.user) {
    return {
      ok: false,
      message: 'user should be authenticated',
    };
  }
  const orders = await prisma.order.findMany({
    where: {
      userId: session!.user.id,
    },
    include: {
      OrderAddress: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  });

  return {
    ok: true,
    orders: orders,
  };
};
