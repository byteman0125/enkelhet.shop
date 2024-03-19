'use client';

import { ProductExperience, QuantitySelector, ViewInRoom } from '@/components';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {
  params: {
    slug: string;
  };
}

gsap.registerPlugin(ScrollTrigger);

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to('.gallery', {
      scrollTrigger: {
        trigger: '.gallery',
        start: 'top 133px',
        end: 'bottom bottom',
        pin: '.right',
        scrub: true,
        onUpdate: (self) => {
          const opacity = 1 - self.progress;
          gsap.to(imageRef.current, { opacity: opacity });
        },
      },
    });
  });
  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 text-sm border-b border-black sticky top-[65px] md:top-[81px] bg-white z-10">
        SHOP / lounge / {slug}
      </div>
      <div className="grid grid-cols-12 h-fit border-b-4 border-black md:border-none">
        <div className="col-span-12 xl:col-span-8 border-r border-black gallery relative">
          <div className="w-full h-[calc(100vh-81px-53px)] bg-black sticky top-[81px]">
            <figure className="relative h-full w-full" ref={imageRef}>
              <Image
                src={`/product.webp`}
                className="object-cover"
                fill
                alt=""
                priority
              />
            </figure>
          </div>
          <div className="w-full h-[calc(100vh-81px-53px)] scrollable">
            <ProductExperience />
          </div>
          <ViewInRoom />
        </div>

        <div className="col-span-12 xl:col-span-4 h-[calc(100vh-81px-53px)] right flex flex-col justify-between">
          <div className="p-4 flex flex-col gap-14">
            <div className="flex flex-col font-bold">
              <h1>ROCKER</h1>
              <span>1500€</span>
            </div>
            <div className="flex flex-col md:grid grid-cols-6">
              <p className="col-span-2">DESCRIPTION</p>
              <p className="text-[12px] font-bold col-span-4">
                Formica is OWL’s first series, marking the beginning of the
                brand and workshop. The collection presents a series of seating
                variations in baltic birch plywood, a neutral material fit for
                any type of home or interior design project. As a means to be
                open and customisable, the series comes with a collection of
                add-ons in formica, which allows for a more playful and
                colourful design.
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
    </>
  );
}
