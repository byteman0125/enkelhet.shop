export const revalidate = 604800; //7days

import { getProductBySlug } from '@/actions';
import { ProductExperience, ProductStock } from '@/components';
import { currencyFormat } from '@/utils';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AddToCart } from '../ui/AddToCart';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 text-sm border-b border-black sticky top-[65px] md:top-[81px] bg-white z-10">
        SHOP / {product.series} / {product.title}
      </div>
      <div className="grid grid-cols-12 h-[calc(100vh-118px)] border-b-4 border-black md:border-none">
        <div className="col-span-12 xl:col-span-7 md:border-r border-black gallery relative">
          <div className="w-full h-[calc(100vh-118px)] md:h-[calc(100vh-134px)] sticky  top-[118px] md:top-[134px]">
            <Image
              src={`${product.images[0]}`}
              alt=""
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="w-full h-[calc(100vh-118px)] md:h-[calc(100vh-134px)] sticky top-[118px] md:top-[134px] ">
            <div className="w-full h-full bg-transparent absolute top-0 left-0 z-[999999999] md:hidden"></div>
            <ProductExperience
              model={
                product?.ProductModel[0].url && product?.ProductModel[0].url
              }
              measurements={product.measurements}
            />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-5 h-full flex flex-col justify-between">
          <div className="h-[calc(100vh-134px)] w-full sticky  top-[118px] md:top-[134px] flex flex-col justify-between">
            <div className="pt-4 flex flex-col justify-between h-full gap-5 md:gap-0">
              <div className="flex flex-col px-4">
                <div className="flex w-full items-center justify-between">
                  <h1 className="font-bold">{product.title}</h1>
                  <ProductStock slug={product.slug} />
                </div>
                <span>{currencyFormat(product.price)}</span>
              </div>
              <div className="flex flex-col md:grid grid-cols-6 px-4">
                <p className="col-span-2">DESCRIPTION</p>
                <p className="text-[12px] font-bold col-span-4">
                  {product.description}
                </p>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-6 px-4">
                <p className="col-span-2">MEASUREMENTS</p>
                <div className="grid grid-cols-6 md:col-span-4">
                  <div className="text-[12px] font-bold col-span-4">
                    <p>Total Height</p>
                    <p>Seating Height</p>
                    <p>Width</p>
                    <p>Depth</p>
                  </div>
                  <div className="text-[12px] font-bold col-span-2">
                    <p>{product.measurements.width}cm</p>
                    <p>{product.measurements.seat_height}cm</p>
                    <p>{product.measurements.width}cm</p>
                    <p>{product.measurements.depth}cm</p>
                  </div>
                </div>
              </div>
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
