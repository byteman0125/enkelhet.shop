import { QuantitySelector } from '@/components';
import { IProduct } from '@/interfaces';
import Image from 'next/image';

interface Props {
  product: IProduct;
  editable?: boolean;
}

export const CartItem = ({ product, editable = true }: Props) => {
  return (
    <div className="border-b border-black flex h-fit md:h-[140px]">
      <figure className="aspect-square relative border-r border-black">
        <Image
          src={`${product.images[0]}`}
          alt="product image"
          className="object-cover"
          fill
        />
      </figure>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex items-center justify-between p-4">
          <p>
            <span>{product.title}</span> / {product.finish[0]}
          </p>

          {editable && (
            <button className="hover:underline underline-offset-2">
              <p>REMOVE</p>
            </button>
          )}
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="max-w-52 w-full">
            {editable ? (
              <QuantitySelector quantity={1} />
            ) : (
              <div className="px-4">
                <p>{product.price}€ x 3</p>
                <p className="font-bold">Subtotal: {product.price * 3}€</p>
              </div>
            )}
          </div>

          <p className="p-4">{product.price}€</p>
        </div>
      </div>
    </div>
  );
};
