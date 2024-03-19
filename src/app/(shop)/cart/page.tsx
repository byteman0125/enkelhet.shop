import { CartItem } from '@/components';
import { initialData } from '@/seed/seed';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
export default function CartPage() {
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 pt-12">
      <div className="w-full h-full border-t border-r border-black">
        {productsInCart.map((product) => (
          <CartItem product={product} key={product.slug} />
        ))}
      </div>
      <div className="bg-red-300 w-full h-full border-t border-black">
        summary
      </div>
    </div>
  );
}
