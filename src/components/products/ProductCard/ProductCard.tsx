import { IProduct } from '@/interfaces';
import { currencyFormat } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ProductImage } from './ProductImage';

interface Props {
  product: IProduct;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="w-full h-fit product-card"
    >
      <ProductImage images={product.images} />
      <div className="p-2 text-sm">
        <p className="uppercase">{product.title}</p>
        <div className="flex items-center justify-between">
          <p>{currencyFormat(product.price)}</p>
          <div className="flex items-center gap-2">
            {product.finish.map((finishItem, i) => (
              <div className="h-4 w-4 relative" key={finishItem}>
                <Image
                  src={`/woods/${finishItem}.jpg`}
                  alt={`${finishItem} wood`}
                  fill
                  className="rounded-full h-4 w-4"
                />
              </div>
            ))}
            <div className="h-4 w-4 rounded-full flex items-center justify-center border border-black">
              +
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
