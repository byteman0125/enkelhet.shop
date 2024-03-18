import { IProduct } from '@/interfaces';
import { ProductCard } from '../ProductCard/ProductCard';

interface Props {
  products: IProduct;
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-3">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
