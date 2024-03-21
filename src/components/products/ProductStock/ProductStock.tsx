'use client';

import { getStockBySlug } from '@/actions';
import { useEffect, useState } from 'react';

interface Props {
  slug: string;
}

export const ProductStock = ({ slug }: Props) => {
  const [stock, setStock] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getStock();
  });

  const getStock = async () => {
    const productStock = await getStockBySlug(slug);
    setStock(productStock);
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <span className={`w-[100px] px-2 flex items-center justify-center`}>
          -
        </span>
      ) : (
        <span
          className={`${stock === 0 ? 'bg-red-300' : ''} w-[100px] px-2 flex items-center justify-center`}
        >
          {stock === 0 ? 'no stock' : `stock: ${stock}`}
        </span>
      )}
    </>
  );
};
