'use client';
import { CartItem } from '@/components';
import { useCartStore } from '@/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const ProductsInCart = () => {
  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore((state) => state.cart);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className="w-full h-full border-r border-black ">
      {loaded && productsInCart.length > 0 ? (
        productsInCart.map((product) => (
          <CartItem
            product={product}
            key={`${product.slug}-${product.finish}`}
          />
        ))
      ) : (
        <>
          <div className="flex flex-col items-center justify-center h-full px-8">
            <h1 className="font-black text-[10vw]">(O.O)</h1>
            <p className="text-base mb-8 text-center">
              Oh, it seems that you have no items in the cart
            </p>
            <Link
              href="/"
              className="bg-gray-200 px-4 py-2 rounded-md flex items-center gap-4"
            >
              <span>back home</span>
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7H17M17 7L11 1M17 7L11 13"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
