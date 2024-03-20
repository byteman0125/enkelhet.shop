import { getPaginatedProductsWithImages } from '@/actions';
import { Hero, ProductGrid } from '@/components';

export default async function HomePage() {
  const { products } = await getPaginatedProductsWithImages();
  return (
    <div className="">
      <Hero
        text="All pieces are handmade in our workshop and produced on a made to order
        basis. Please keep in mind that once your order is placed production
        times can be from 8 - 10 weeks. Download full catalog here."
      />
      <ProductGrid products={products} />
    </div>
  );
}
