'use client';
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
    ScrollTrigger.create({
      trigger: '.gallery',
      start: 'top 133px',
      end: 'bottom bottom',
      pin: '.right',
      onUpdate: (self) => {
        const opacity = 1 - self.progress;
        gsap.to(imageRef.current, { opacity: opacity });
      },
    });
  });
  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 text-sm border-b border-black sticky top-[81px] bg-white z-10">
        SHOP / lounge / {slug}
      </div>
      <div className="grid grid-cols-12 h-fit gap-4">
        <div className="col-span-8 border-r border-black gallery">
          <div className="w-full h-[calc(100vh-81px-53px)] bg-black">
            <figure className="relative h-full w-full" ref={imageRef}>
              <Image
                src={`/product.webp`}
                className="object-cover"
                fill
                alt=""
              />
            </figure>
          </div>
          <div className="w-full h-[calc(100vh-81px-53px)] bg-red-200"></div>
        </div>

        <div className="col-span-4 h-fit right p-4">Datos del producto</div>
      </div>
    </>
  );
}
