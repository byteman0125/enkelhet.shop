import { CartSummary } from './ui/CartSummary';
import { ProductsInCart } from './ui/ProductsInCart';

export default function CartPage() {
  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 flex items-center justify-between w-full top-[65px] md:top-[81px] z-10 bg-white border-b border-black">
        <p>CART</p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <ProductsInCart />
        <CartSummary />
      </div>
    </>
  );
}
