import Link from 'next/link';
import { ProductsInCart } from './ui/ProductsInCart';

export default function CartPage() {
  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 flex items-center justify-between w-full sticky top-[81px] z-10 bg-white border-b border-black">
        <p>CART</p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <ProductsInCart />
        <div className="w-full flex flex-col justify-between sticky top-[137px] h-[calc(100vh-81px-56px)]">
          <div className="p-8">
            <h1 className="text-xl">Order summary</h1>
            <div className="grid grid-cols-2">
              <span>No. products</span>
              <span className="text-right">3 items</span>

              <span>Subtotal</span>
              <span className="text-right">3560€</span>

              <span>Tax (15%)</span>
              <span className="text-right">240€</span>

              <div className="flex items-center justify-between w-full border-t border-black col-span-2 mt-5 pt-2">
                <span className="text-xl font-bold">Total</span>
                <span className="text-right font-bold">240€</span>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-end">
            <Link
              href={`/checkout/address`}
              className="flex items-center justify-center col-span-2 md:col-span-3 w-full bg-black px-4 py-4 text-white text-sm md:text-base"
            >
              Continue to checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
