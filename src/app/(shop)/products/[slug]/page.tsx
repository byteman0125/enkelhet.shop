export const revalidate = 604800; //7days

import { getProductBySlug } from '@/actions';
import {
  ProductExperience,
  ProductFinishSelector,
  ProductStock,
  QuantitySelector,
} from '@/components';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const product = await getProductBySlug(slug);
  //const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product?.title ?? 'product not found',
    description: product?.description ?? '',
    openGraph: {
      title: product?.title ?? 'product not found',
      description: product?.description ?? '',
      images: [`/${product?.images[1]}`],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }
  console.log(product);
  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 text-sm border-b border-black sticky top-[65px] md:top-[81px] bg-white z-10">
        SHOP / {product.series} / {product.title}
      </div>
      <div className="grid grid-cols-12 h-[calc(100vh-134px)] border-b-4 border-black md:border-none">
        <div className="col-span-12 xl:col-span-8 border-r border-black gallery relative">
          <div className="w-full h-[calc(100vh-134px)] sticky top-[134px]">
            <Image src={`/product.webp`} alt="" fill className="object-cover" />
          </div>
          <div className="w-full h-[calc(100vh-134px)] sticky top-[134px] ">
            <ProductExperience />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4 h-full flex flex-col justify-between">
          <div className="h-[calc(100vh-134px)] w-full sticky top-[134px] flex flex-col justify-between">
            <div className="p-4 flex flex-col gap-14">
              <div className="flex flex-col">
                <div className="flex w-full items-center justify-between">
                  <h1 className="font-bold">{product.title}</h1>
                  <ProductStock slug={product.slug} />
                </div>
                <span>{product.price}€</span>
              </div>
              <div className="flex flex-col md:grid grid-cols-6">
                <p className="col-span-2">DESCRIPTION</p>
                <p className="text-[12px] font-bold col-span-4">
                  {product.description}
                </p>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-6">
                <p className="col-span-2">MEASUREMENTS</p>
                <div className="grid grid-cols-6 md:col-span-4">
                  <div className="text-[12px] font-bold col-span-4">
                    <p>Total Height</p>
                    <p>Seating Height</p>
                    <p>Width</p>
                    <p>Depth</p>
                  </div>
                  <div className="text-[12px] font-bold col-span-2">
                    <p>measurement data</p>
                    <p>measurement data</p>
                    <p>measurement data</p>
                    <p>measurement data</p>
                  </div>
                </div>
              </div>

              <ProductFinishSelector finishes={product.finish} />
            </div>
            <div className="border-t border-black grid grid-cols-5">
              <QuantitySelector quantity={2} />

              <div className="flex items-center justify-center col-span-2 md:col-span-3 w-full bg-black px-4 py-4 text-white text-sm md:text-base">
                <p>ADD TO CART</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
