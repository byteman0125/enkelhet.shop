import { Hero, ProductGrid } from '@/components';
import { initialData } from '@/seed/seed';

interface Props {
  params: {
    id: string;
  };
}

const products = initialData.products;

export default function SeriesPage({ params }: Props) {
  const { id } = params;
  const seriesProducts = products.filter((product) => product.series === id);
  // if (id === 'abc') {
  //   notFound();
  // }
  return (
    <div className="">
      <Hero
        title={`${id}`}
        text={`useParams is a Client Component hook that lets you read a route's dynamic params filled in by the current URL. ${id}`}
      />
      <ProductGrid products={seriesProducts} />
    </div>
  );
}
