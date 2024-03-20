import { getPaginatedProductsWithImages } from '@/actions';
import { Hero, ProductGrid } from '@/components';

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function HomePage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products } = await getPaginatedProductsWithImages({
    page,
  });
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
