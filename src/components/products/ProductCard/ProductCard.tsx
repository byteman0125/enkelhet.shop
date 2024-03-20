import { SeedProduct } from '@/seed/seed';
import Link from 'next/link';
import { ProductImage } from './ProductImage';

interface Props {
  product: SeedProduct;
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
          <p>{product.price}€</p>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-red-600 rounded-full"></div>
            <div className="h-4 w-4 bg-green-600 rounded-full"></div>
            <div className="h-4 w-4 bg-yellow-600 rounded-full"></div>
            <div className="h-4 w-4 rounded-full flex items-center justify-center border border-black">
              +
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
