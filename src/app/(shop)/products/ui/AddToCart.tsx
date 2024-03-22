'use client';
import { ProductFinishSelector } from '@/components';
import { FinishType, IProduct } from '@/interfaces';
import { useState } from 'react';
import { QuantityProductSelector } from './QuantityProductSelector';

interface Props {
  product: IProduct;
}

export const AddToCart = ({ product }: Props) => {
  const [finish, setFinish] = useState<FinishType>('ash');
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    console.log({ quantity, finish, product });
  };

  return (
    <>
      <div className="px-4">
        <ProductFinishSelector
          finishes={product.finish}
          onFinishChange={setFinish}
          selectedFinish={finish}
        />
      </div>
      <div>
        <div className="border-t border-black">
          <QuantityProductSelector
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
        </div>
        <button onClick={addToCart} className="border-t border-black w-full">
          <div className="flex items-center justify-center col-span-2 md:col-span-3  bg-black px-4 py-4 text-white text-sm md:text-base w-full">
            <p>ADD TO CART</p>
          </div>
        </button>
      </div>
    </>
  );
};
