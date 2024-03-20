import { IProduct } from '@/interfaces';
import { ProductCard } from '../ProductCard/ProductCard';

interface Props {
  products: IProduct[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-b border-black mb-24">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
};
