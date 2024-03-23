'use client';
import { CartItem } from '@/components';
import { useCartStore } from '@/store';
import { useEffect, useState } from 'react';

export const ProductsInCart = () => {
  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore((state) => state.cart);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="w-full h-full border-r border-black ">
      {loaded &&
        productsInCart.map((product) => (
          <CartItem
            product={product}
            key={`${product.slug}-${product.finish}`}
          />
        ))}
    </div>
  );
};
