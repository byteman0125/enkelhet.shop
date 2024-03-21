export const revalidate = 604800; //7days

import { getProductBySlug } from '@/actions';
import { ProductExperience, QuantitySelector } from '@/components';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
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
      <div className="grid grid-cols-12 h-[calc(100vh-134px)] border-b-4 border-black md:border-none">
        <div className="col-span-12 xl:col-span-8 border-r border-black gallery relative">
          <div className="w-full h-[calc(100vh-134px)] sticky top-[134px]">
            <Image
              src={`/${product.images[0]}`}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-[calc(100vh-134px)] sticky top-[134px] ">
            <ProductExperience />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4 h-full flex flex-col justify-between">
          <div className="h-[calc(100vh-134px)] w-full sticky top-[134px] flex flex-col justify-between">
            <div className="p-4 flex flex-col gap-14">
              <div className="flex flex-col font-bold">
                <h1>{product.title}</h1>
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
                    <p>85 cm</p>
                    <p>45 cm</p>
                    <p>60 cm</p>
                    <p>80 cm</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6">
                <p className="col-span-2">FINISH</p>
                <div className="text-[12px] font-bold col-span-2">
                  <div className="flex items-center gap-2">
                    <button className="h-4 w-4 bg-[#022042] rounded-full"></button>
                    <button className="h-4 w-4 bg-[#670007] rounded-full"></button>
                    <button className="h-4 w-4 bg-[#cbbc96] rounded-full"></button>
                  </div>
                </div>
                <div className="text-[12px] font-bold col-span-2">
                  <div className="w-full aspect-square bg-[#022042] border border-black"></div>
                </div>
              </div>
            </div>
            <div className="border-t border-black grid grid-cols-5">
              <QuantitySelector quantity={2} />

              <div className="flex items-center justify-center col-span-2 md:col-span-3 w-full bg-[#0038a3] px-4 py-4 text-white text-sm md:text-base">
                <p>ADD TO CART</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
