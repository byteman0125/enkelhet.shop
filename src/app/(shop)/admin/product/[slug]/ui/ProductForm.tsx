'use client';

import { createUpdateProduct } from '@/actions';
import { ProductModel } from '@/components';
import { Input } from '@/components/base/FormInputs/Input';
import { TextArea } from '@/components/base/FormInputs/TextArea';
import { finishes } from '@/constants';
import { FinishType, IProduct, IProductImage } from '@/interfaces';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

interface Props {
  product: Partial<IProduct> & { ProductImage?: IProductImage[] };
  isNew: boolean;
}

interface Measurements {
  total_height: number;
  seat_height: number;
  width: number;
  depth: number;
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
  measurements: Measurements;
  //TODO: images
}

export const ProductForm = ({ product, isNew }: Props) => {
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
      tags: product.tags?.join(', '),
      finish: product.finish ?? [],
      measurements: {
        depth: product.measurements?.depth ?? 0,
        seat_height: product.measurements?.seat_height ?? 0,
        width: product.measurements?.width ?? 0,
        total_height: product.measurements?.total_height ?? 0,
      },
    },
  });

  watch('finish');

  const buttonTitle = isNew ? 'Create new product' : `Update ${product.title}`;

  const onSizeChanged = async (finish: FinishType) => {
    const finishes = new Set(getValues('finish'));
    finishes.has(finish) ? finishes.delete(finish) : finishes.add(finish);
    setValue('finish', Array.from(finishes));
  };

  const onSubmit = async (data: IFormInputs) => {
    const formData = new FormData();
    const { ...productToSave } = data;
    if (product.id) {
      formData.append('id', product.id ?? '');
    }
    formData.append('title', productToSave.title);
    formData.append('slug', productToSave.slug);
    formData.append('description', productToSave.description);
    formData.append('price', productToSave.price.toString());
    formData.append('inStock', productToSave.inStock.toString());
    formData.append('finish', productToSave.finish.toString());
    formData.append('tags', productToSave.tags);
    formData.append('series', productToSave.series);
    formData.append('measurements', JSON.stringify(data.measurements));

    const { ok } = await createUpdateProduct(formData);
    console.log(ok);
  };

  return (
    <>
      <form
        className={`w-full grid grid-cols-1 xl:grid-cols-2 h-[calc(100vh-81px-56px)]`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full h-full border-r border-black flex flex-col justify-between">
          <div>
            <Input
              label="Title"
              id="title"
              type="text"
              formName="title"
              register={register}
            />
            <Input
              label="Slug"
              id="slug"
              type="text"
              formName="slug"
              register={register}
            />
            <TextArea
              label="Description"
              id="description"
              type="text"
              formName="description"
              register={register}
            />
            <Input
              label="Price"
              id="price"
              type="number"
              formName="price"
              register={register}
            />
            <Input
              label="Tags"
              id="tags"
              type="text"
              formName="tags"
              register={register}
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
                      <div>
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
                      </div>
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
            {isNew && (
              <Input
                label="Stock"
                id="inStock"
                type="number"
                formName="inStock"
                register={register}
              />
            )}
            <select
              className="outline-none border-b border-black px-2 md:px-4 xl:px-6 py-3 w-full h-[49px]"
              {...register('series', { required: true })}
            >
              <option value="">[ Select serie ]</option>
              <option>lounge</option>
              <option>alabaster</option>
              <option>capsule</option>
            </select>
            <div className="px-2 md:px-4 xl:px-6 py-3 borde-b border-black">
              <p>Measurements</p>

              <div className="flex items-center gap-3">
                <p className="whitespace-nowrap w-[250px]">
                  Total height (cm):{' '}
                </p>
                <input
                  type="number"
                  className="outline-none w-full"
                  {...register('measurements.total_height')}
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="whitespace-nowrap w-[250px]">
                  Seat height (cm):{' '}
                </p>
                <input
                  type="number"
                  className="outline-none w-full"
                  {...register('measurements.seat_height')}
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="whitespace-nowrap w-[250px]">Width (cm): </p>
                <input
                  type="number"
                  className="outline-none w-full"
                  {...register('measurements.width')}
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="whitespace-nowrap w-[250px]">Depth (cm): </p>
                <input
                  type="number"
                  className="outline-none w-full"
                  {...register('measurements.depth')}
                />
              </div>
            </div>
          </div>
          <button className="w-full p-4 text-white bg-black">
            {buttonTitle}
          </button>
        </div>
        <div className=" flex flex-col">
          <div className="flex-1 border-b border-black relative">
            <div className="absolute top-4 right-4 z-50">
              <p>file_name: enkelhet_positive_chair.glb</p>
              <p>file_size: 1248kb</p>
            </div>
            <Canvas
              className="w-full h-full bg-yellow-300"
              camera={{ fov: 30, zoom: 0.4, position: [0, 1, 6] }}
            >
              <ProductModel />
              <Environment preset="apartment" />
              <OrbitControls
                autoRotateSpeed={0.8}
                enableZoom={false}
                autoRotate
              />
            </Canvas>
          </div>
          <div className="flex flex-col justify-end">
            <input
              className="appearance-none w-full border-b border-black  cursor-pointer file:bg-black file:text-white file:h-[49px] file:border-none file:mr-3"
              id="large_size"
              type="file"
              accept="image/png, image/jpeg"
              multiple
            />

            <div className="flex border-b border-black ">
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
              <div>
                <div className="p-4 h-[200px] w-[200px]"></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
