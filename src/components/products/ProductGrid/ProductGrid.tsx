import { SeedProduct } from '@/seed/seed';
import { ProductCard } from '../ProductCard/ProductCard';

interface Props {
  products: SeedProduct[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
};
