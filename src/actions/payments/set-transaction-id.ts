'use server';

import prisma from '@/utils/prisma';

export const setTransactionId = async (
  orderId: string,
  transactionId: string
) => {
  try {
    const order = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        transactionId: transactionId,
      },
    });
    console.log({ order });
    if (!order) {
      return {
        ok: false,
        message: `order with id: ${orderId} not found`,
      };
    }

    return { ok: true };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'transaction id update failed',
    };
  }
};
