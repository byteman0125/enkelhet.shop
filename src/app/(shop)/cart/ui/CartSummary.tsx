'use client';
import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import { useEffect, useState } from 'react';

export const CartSummary = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  const { total, subTotal, tax, itemsInCart } = useCartStore((state) =>
    state.getSummaryData()
  );

  return (
    <div className="p-8">
      {loaded && (
        <>
          <h1 className="text-xl">Order summary</h1>
          <div className="grid grid-cols-2">
            <span>No. products</span>
            <span className="text-right">
              {itemsInCart} {itemsInCart === 1 ? 'item' : 'items'}
            </span>

            <span>Subtotal</span>
            <span className="text-right">{currencyFormat(subTotal)}</span>

            <span>Tax (15%)</span>
            <span className="text-right">{currencyFormat(tax)}</span>

            <div className="flex items-center justify-between w-full border-t border-black col-span-2 mt-5 pt-2">
              <span className="text-xl font-bold">Total</span>
              <span className="text-right font-bold">
                {currencyFormat(total)}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
