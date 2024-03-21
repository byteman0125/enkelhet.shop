'use client';

import { getStockBySlug } from '@/actions';
import { useEffect, useState } from 'react';

interface Props {
  slug: string;
}

export const ProductStock = ({ slug }: Props) => {
  const [stock, setStock] = useState<number | null>(null);
  useEffect(() => {
    getStock();
  });

  const getStock = async () => {
    const productStock = await getStockBySlug(slug);
    setStock(productStock);
  };
  return (
    <>
      {stock === 0 ? (
        <span className="bg-red-300 px-2">no stock</span>
      ) : (
        <span>stock: {stock}</span>
      )}
    </>
  );
};
