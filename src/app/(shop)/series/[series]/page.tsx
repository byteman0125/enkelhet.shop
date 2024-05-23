export const revalidate = 60; //secs

import { getPaginatedProductsWithImages } from '@/actions';
import { Hero, Pagination, ProductGrid } from '@/components';
import { Series } from '@prisma/client';

interface Props {
  params: {
    series: string;
  };
  searchParams: {
    page?: string;
  };
}

export default async function SeriesPage({ params, searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const series = params.series;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    series: series as Series,
  });

  return (
    <div className="">
      <Hero title={`${series}`} text={`Enkelhet serie ${series}`} />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
