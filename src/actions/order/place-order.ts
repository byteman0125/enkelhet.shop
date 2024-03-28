'use server';

import { auth } from '@/auth.config';
import type { IAddress } from '@/interfaces';
import prisma from '@/utils/prisma';
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

  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds.map((p) => p.productId),
      },
    },
  });

  const itemsinOrder = productIds.reduce((count, p) => count + p.quantity, 0);
  const { subTotal, tax, total } = productIds.reduce(
    (totals, item) => {
      const productQuantity = item.quantity;
      const product = products.find((product) => product.id === item.productId);

      if (!product) throw new Error(`${item.productId} doesn't exist - 500`);

      const subTotal = product.price * productQuantity;

      totals.subTotal += subTotal;
      totals.tax += subTotal * 0.15;
      totals.total += subTotal * 1.15;

      return totals;
    },
    { subTotal: 0, tax: 0, total: 0 }
  );

  console.log({ subTotal, total, tax });
};
