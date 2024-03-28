import { QuantityProductSelector } from '@/app/(shop)/products/ui/QuantityProductSelector';
import { ICartProduct } from '@/interfaces';
import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  product: ICartProduct;
  editable?: boolean;
}

export const CartItem = ({ product, editable = true }: Props) => {
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const updateCartProduct = useCartStore((state) => state.removeCartProduct);

  return (
    <div className="border-b border-black flex h-fit md:h-[140px]">
      <figure className="aspect-square relative border-r border-black">
        <Image
          src={`/${product.image}`}
          alt="product image"
          className="object-cover"
          fill
        />
      </figure>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex items-center justify-between p-4">
          <Link
            href={`/products/${product.slug}`}
            className="hover:underline underline-offset-2"
          >
            <span>{product.title}</span> / {product.finish} wood
          </Link>

          {editable && (
            <button
              className="hover:underline underline-offset-2"
              onClick={() => updateCartProduct(product)}
            >
              <p>REMOVE</p>
            </button>
          )}
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="max-w-52 w-full">
            {editable ? (
              <QuantityProductSelector
                onQuantityChange={(quantity) =>
                  updateProductQuantity(product, quantity)
                }
                quantity={product.quantity}
              />
            ) : (
              <div className="px-4">
                <p>
                  {currencyFormat(product.price)} x {product.quantity}
                </p>
                <p className="font-bold">
                  Subtotal: {currencyFormat(product.price * product.quantity)}
                </p>
              </div>
            )}
          </div>

          <p className="p-4">{product.price}€</p>
        </div>
      </div>
    </div>
  );
};
