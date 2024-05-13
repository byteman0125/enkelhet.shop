'use server';

import { auth } from '@/auth.config';
import prisma from '@/utils/prisma';

export const getOrderById = async (id: string) => {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return {
      ok: false,
      message: 'no session available',
    };
  }

  try {
    const order = await prisma.order.findUnique({
      where: {
        id: id,
      },
      include: {
        OrderAddress: true,
        OrderItem: {
          select: {
            price: true,
            quantity: true,
            finsh: true,
            product: {
              select: {
                id: true,
                title: true,
                slug: true,
                inStock: true,
                ProductImage: {
                  select: {
                    url: true,
                  },
                  take: 1,
                },
              },
            },
          },
        },
      },
    });

    if (!order) throw new Error(`${id} doesn't exist`);
    if (session.user.role === 'user') {
      if (session.user.id !== order.userId)
        throw new Error(`${id} doesn't correspond to this user`);
    }

    return {
      ok: true,
      order,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'non existent order',
    };
  }
};
