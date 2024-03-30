'use client';

import { finishes } from '@/constants';
import { FinishType, IProduct } from '@/interfaces';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

interface Props {
  product: IProduct;
}

interface IFormInputs {
  title: string;
  slug: string;
  description: string;
  price: number;
  inStock: number;
  finishes: FinishType[];
  tags: string;
  series: 'lounge' | 'alabaster' | 'capsule';
  seriesId: string;
  //TODO: images
}

export const ProductForm = ({ product }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormInputs>({
    defaultValues: {
      ...product,
      tags: product.tags.join(', '),
      finishes: product.finish ?? [],
    },
  });

  const buttonTitle = !product
    ? 'Create new product'
    : `Update ${product.title}`;

  const onSubmit = async (data: IFormInputs) => {
    console.log('FIRST');
    console.log({ data });
  };

  return (
    <>
      <form
        className={`w-full grid grid-cols-1 xl:grid-cols-2 h-[calc(100vh-81px-56px)]`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full h-full border-r border-black flex flex-col justify-between">
          <div>
            <input
              type="text"
              placeholder="Title"
              className="outline-none border-b border-black px-2 md:px-4 xl:px-6 py-3 w-full"
              {...register('title', { required: true })}
            />
            <input
              type="text"
              placeholder="Slug"
              className="outline-none border-b border-black px-2 md:px-4 xl:px-6 py-3 w-full"
              {...register('slug', { required: true })}
            />
            <textarea
              rows={8}
              placeholder="Description"
              className="outline-none border-b border-black px-2 md:px-4 xl:px-6 py-3 w-full resize-none"
              {...register('description', { required: true })}
            />
            <input
              type="number"
              placeholder="Price"
              className="outline-none border-b border-black px-2 md:px-4 xl:px-6 py-3 w-full appearance-none"
              {...register('price', { required: true, min: 0 })}
            />
            <input
              type="text"
              placeholder="Tags"
              className="outline-none border-b border-black px-2 md:px-4 xl:px-6 py-3 w-full"
              {...register('tags', { required: true })}
            />
            <div className="flex justify-between w-full h-[49px] border-b border-black">
              {finishes.map((finishItem) => (
                <div className="w-full hover:bg-gray-300" key={finishItem}>
                  <div className="flex items-center gap-2 px-2 md:px-4 xl:px-6 py-3">
                    <div className="h-4 w-4 relative" key={finishItem}>
                      <Image
                        src={`/woods/${finishItem}.jpg`}
                        alt={`${finishItem} wood`}
                        width={16}
                        height={16}
                        className="rounded-full h-4 w-4"
                      />
                    </div>
                    <p>{finishItem}</p>
                  </div>
                </div>
              ))}
            </div>
            <select
              className="outline-none border-b border-black px-2 md:px-4 xl:px-6 py-3 w-full h-[49px]"
              {...register('series', { required: true })}
            >
              <option value="">[ Select serie ]</option>
              <option>lounge</option>
              <option>alabaster</option>
              <option>capsule</option>
            </select>
          </div>
          <button className="w-full p-4 text-white bg-black">
            {buttonTitle}
          </button>
        </div>
        <div>
          <div className="flex w-full bg-red-200 relative">
            <div className="flex-1 relative h-[calc(100vh-81px-57px)]">
              <Image
                src={`/product.webp`}
                alt="enkelhet product"
                fill
                priority
                className="object-cover"
              />
            </div>
            <input
              type="file"
              multiple
              className="p-2 border bg-white absolute top-4 right-0 left-0 mx-auto w-fit"
              accept="image/png, image/jpeg"
            />
          </div>
        </div>
      </form>
    </>
  );
};
