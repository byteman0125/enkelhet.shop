import { Hero, ProductGrid } from '@/components';
import { initialData } from '@/seed/seed';

const products = initialData.products;

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <ProductGrid />
    </div>
  );
}
