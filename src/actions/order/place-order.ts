'use server';

import { auth } from '@/auth.config';
import type { IAddress } from '@/interfaces';
import { Finish } from '@prisma/client';

interface IProductToOrder {
  productId: string;
  quantity: number;
  finish: Finish;
}

export const placeOrder = async (
  productIds: IProductToOrder[],
  address: IAddress
) => {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return {
      ok: false,
      message: 'no session available',
    };
  }
  console.log({ productIds, address, userId });
  return { productIds, address, userId };
};
