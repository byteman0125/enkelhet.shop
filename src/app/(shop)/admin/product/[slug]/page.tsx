import { getProductBySlug } from '@/actions';
import { redirect } from 'next/navigation';
import { ProductForm } from './ui/ProductForm';

interface Props {
  params: {
    slug: string;
  };
}

export default async function AdminProductPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    redirect('/admin/products');
  }

  const title = slug === 'new' ? 'New product' : `Editing ${product.title}`;

  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 flex items-center justify-between w-full sticky top-[81px] z-10 text-white bg-black">
        <p>{title}</p>
      </div>

      <ProductForm product={product} />
    </>
  );
}
