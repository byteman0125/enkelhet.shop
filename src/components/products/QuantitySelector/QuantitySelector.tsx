'use client';
import { useState } from 'react';

interface Props {
  quantity: number;
}
export const QuantitySelector = ({ quantity }: Props) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const onQuantityChange = (value: number) => {
    if (currentQuantity + value < 1) return;

    setCurrentQuantity(currentQuantity + value);
  };

  return (
    <div className="flex items-center col-span-3 md:col-span-2 w-full justify-between px-4 py-4 text-sm md:text-base">
      <p>QUANTITY</p>
      <div className="flex items-center justify-between gap-5">
        <button onClick={() => onQuantityChange(-1)}>-</button>
        <div className="w-4 flex items-center justify-center">
          <p>{currentQuantity}</p>
        </div>
        <button onClick={() => onQuantityChange(+1)}>+</button>
      </div>
    </div>
  );
};
