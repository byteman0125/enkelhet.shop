'use client';

import { placeOrder } from '@/actions';
import { useAddressStore, useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import { useEffect, useState } from 'react';

export const PlaceOrder = () => {
  const [loaded, setLoaded] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const { address } = useAddressStore();
  const { total, subTotal, tax, itemsInCart } = useCartStore((state) =>
    state.getSummaryData()
  );
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const onPlaceOrder = async () => {
    setIsPlacingOrder(true);
    const productsToOrder = cart.map((product) => ({
      productId: product.id,
      quantity: product.quantity,
      finish: product.finish,
    }));

    const res = await placeOrder(productsToOrder, address);

    console.log(res);

    setIsPlacingOrder(false);
  };

  if (!loaded) return <></>;

  return (
    <>
      <div className="flex flex-col gap-5 p-8">
        <div>
          <h1 className="text-xl  font-bold">Shipping address</h1>
          <div>
            <p>
              {address.firstName} {address.lastName}
            </p>
            <p>{address.address}</p>
            <p>{address.city}</p>
            <p>ZIP {address.postalCode}</p>
            <p>{address.phone}</p>
          </div>
        </div>

        <div>
          <h1 className="text-xl  font-bold">Order summary</h1>
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
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:items-center justify-between pt-8 gap-4">
        <button
          disabled={isPlacingOrder}
          className={`flex items-center justify-center col-span-2 md:col-span-3 w-full  ${isPlacingOrder ? 'bg-gray-200' : 'bg-black'} px-4 py-4 text-sm md:text-base text-white`}
          onClick={onPlaceOrder}
        >
          Place order
        </button>
      </div>
    </>
  );
};
