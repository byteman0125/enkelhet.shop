'use client';

import { createUpdateProduct } from '@/actions';
import { finishes } from '@/constants';
import { FinishType, IProduct, IProductImage } from '@/interfaces';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

interface Props {
  product: IProduct & { ProductImage?: IProductImage[] };
}

interface IFormInputs {
  title: string;
  slug: string;
  description: string;
  price: number;
  inStock: number;
  finish: FinishType[];
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
    getValues,
    setValue,
    watch,
  } = useForm<IFormInputs>({
    defaultValues: {
      ...product,
      tags: product.tags.join(', '),
      finish: product.finish ?? [],
    },
  });

  watch('finish');

  const buttonTitle = !product
    ? 'Create new product'
    : `Update ${product.title}`;

  const onSizeChanged = async (finish: FinishType) => {
    const finishes = new Set(getValues('finish'));
    finishes.has(finish) ? finishes.delete(finish) : finishes.add(finish);
    setValue('finish', Array.from(finishes));
  };

  const onSubmit = async (data: IFormInputs) => {
    const formData = new FormData();
    const { ...productToSave } = data;
    formData.append('id', product.id ?? '');
    formData.append('title', productToSave.title);
    formData.append('slug', productToSave.slug);
    formData.append('description', productToSave.description);
    formData.append('price', productToSave.price.toString());
    formData.append('inStock', productToSave.inStock.toString());
    formData.append('finish', productToSave.finish.toString());
    formData.append('tags', productToSave.tags);
    formData.append('series', productToSave.series);

    const { ok } = await createUpdateProduct(formData);
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
                <button
                  onClick={() => onSizeChanged(finishItem)}
                  className="w-full hover:bg-gray-300 cursor-pointer"
                  key={finishItem}
                >
                  <div
                    className={`flex items-center gap-2 px-2 md:px-4 xl:px-6 py-3 ${getValues('finish').includes(finishItem) ? 'bg-black text-white' : 'bg-white text-black'}`}
                  >
                    <div className="flex items-center gap-2">
                      <p>
                        {getValues('finish').includes(finishItem) ? (
                          '[x]'
                        ) : (
                          <div className="flex items-center">
                            [
                            <svg
                              width="9"
                              height="11"
                              viewBox="0 0 9 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 0L6.51637 6.2L4.56157 11H2.90963L0 3.5H1.5L3.68053 9.05H3.79067L7.54628 0H9Z"
                                fill={
                                  getValues('finish').includes(finishItem)
                                    ? 'white'
                                    : 'black'
                                }
                              />
                            </svg>
                            ]
                          </div>
                        )}
                      </p>
                      <div className="h-4 w-4 relative" key={finishItem}>
                        <Image
                          src={`/woods/${finishItem}.jpg`}
                          alt={`${finishItem} wood`}
                          width={16}
                          height={16}
                          className="rounded-full h-4 w-4"
                        />
                      </div>
                    </div>
                    <p>{finishItem}</p>
                  </div>
                </button>
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
        <div className=" flex flex-col">
          <div className="flex-1 border-b border-black bg-blue-400">
            {' '}
            viewer
          </div>
          <div className="flex flex-col justify-end">
            <input
              className="appearance-none w-full border-b border-black  cursor-pointer file:bg-black file:text-white file:h-[49px] file:border-none file:mr-3"
              id="large_size"
              type="file"
              accept="image/png, image/jpeg"
              multiple
            />

            <div className="flex border-b border-black">
              {product.ProductImage?.map((image) => (
                <div key={image.id} className="relative">
                  <Image
                    src={`/${image.url}`}
                    alt={`${product.title} wood`}
                    className="object-cover p-4 h-[200px] w-[200px] aspect-square"
                    width={300}
                    height={300}
                  />
                  <button
                    className="p-1 bg-black absolute top-4 right-4 flex items-center justify-center text-white"
                    onClick={() => console.log(image.id, image.url)}
                  >
                    [x]
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
