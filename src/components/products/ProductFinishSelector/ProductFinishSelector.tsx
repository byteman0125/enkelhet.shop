'use client';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  finishes: ('oak' | 'ash' | 'walnut' | 'wenge')[];
}

export const ProductFinishSelector = ({ finishes }: Props) => {
  const [selectedFinish, setSelectedFinish] = useState(finishes[0]);

  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2">
        <p>FINISH</p>
        <p className="text-[12px] font-bold">{selectedFinish} wood</p>
      </div>
      <div className="text-[12px] font-bold col-span-2">
        <div className="flex items-center gap-2">
          {finishes.map((finish, i) => (
            <button
              className={`relative w-5 h-5 ${selectedFinish === finish ? 'border border-black rounded-full' : ''}`}
              key={finish + i}
              onClick={() => setSelectedFinish(finish)}
            >
              <Image
                src={`/woods/${finish}.jpg`}
                alt={`${finish} wood`}
                fill
                className="rounded-full p-[2px]"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="text-[12px] font-bold col-span-2">
        <div className="w-full aspect-square relative border border-black">
          <Image
            src={`/woods/${selectedFinish}.jpg`}
            alt="oak wood"
            fill
            className="object-fill"
          />
        </div>
      </div>
    </div>
  );
};
