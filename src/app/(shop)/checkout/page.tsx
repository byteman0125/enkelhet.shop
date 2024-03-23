import { initialData } from '@/seed/seed';
import Link from 'next/link';

const productsInCart = [
  initialData.products[0],
  initialData.products[0],
  initialData.products[0],
  initialData.products[0],
  initialData.products[0],
  initialData.products[0],
  initialData.products[0],
  initialData.products[0],
];

export default function CheckoutPage() {
  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 flex items-center justify-between w-full sticky top-[81px] z-10 bg-white border-b border-black">
        <p>CHECKOUT</p>
      </div>
      <div
        className={`w-full grid grid-cols-1 xl:grid-cols-2 ${productsInCart.length <= 3 ? 'border-b border-black' : ''} `}
      >
        <div className="w-full h-full border-r border-black">
          {/* {productsInCart.map((product) => (
            <CartItem product={product} key={product.slug} editable={false} />
          ))} */}
        </div>
        <div
          className={`w-full flex flex-col justify-between sticky top-[137px] h-[calc(100vh-81px-56px)]  border-b border-black`}
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

          <div className="w-full flex flex-col md:flex-row md:items-center justify-between pt-8 gap-4">
            <Link
              href={`/orders/abc`}
              className="flex items-center justify-center col-span-2 md:col-span-3 w-full bg-black px-4 py-4 text-sm md:text-base text-white"
            >
              Place order
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
