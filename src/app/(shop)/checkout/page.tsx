import { CartItem } from '@/components';
import { initialData } from '@/seed/seed';
import Link from 'next/link';

const productsInCart = [
  initialData.products[0],
  initialData.products[0],
  initialData.products[0],
  initialData.products[0],
];

export default function CheckoutPage() {
  return (
    <>
      <p className="py-4 px-2 md:px-4 xl:px-6">CHECKOUT</p>
      <div
        className={`w-full grid grid-cols-1 xl:grid-cols-2 ${productsInCart.length <= 3 ? 'border-b border-black' : ''} `}
      >
        <div className="w-full h-full border-t border-r border-black">
          {productsInCart.map((product) => (
            <CartItem product={product} key={product.slug} editable={false} />
          ))}
        </div>
        <div
          className={`w-full h-full xl:border-t border-black flex flex-col justify-between ${productsInCart.length > 3 ? 'border-b border-black' : ''}`}
        >
          <div className="flex flex-col gap-5 p-8">
            <div>
              <h1 className="text-xl  font-bold">Shipping address</h1>
              <div>
                <p>Tomas Ferreras</p>
                <p>10825 Heritage Hills Dr</p>
                <p>Las Vegas</p>
                <p>ZIP 88901</p>
                <p>555-0179</p>
              </div>
            </div>

            <div>
              <h1 className="text-xl  font-bold">Order summary</h1>
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
          </div>

          <div className="w-full flex flex-col md:flex-row md:items-center justify-between pt-8 pl-8 pr-8 gap-4">
            <p className="text-sm max-w-[500px]">
              By clicking &quot;place order&quot;, you accept and agree our{' '}
              <span className="underline">terms and conditions</span> and{' '}
              <span className="underline">privacy policy</span>
            </p>
            <Link
              href={`/orders/abc`}
              className="flex items-center justify-center col-span-2 md:col-span-3 w-full bg-[#0038a3] px-4 py-4 text-white text-sm md:text-base max-w-56"
            >
              PLACE ORDER
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
