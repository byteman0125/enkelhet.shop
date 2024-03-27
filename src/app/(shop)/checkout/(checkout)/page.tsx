import { ProductsInCart } from '../../cart/ui/ProductsInCart';
import { PlaceOrder } from './ui/PlaceOrder';

export default function CheckoutPage() {
  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 flex items-center justify-between w-full sticky top-[81px] z-10 bg-white border-b border-black">
        <p>CHECKOUT</p>
      </div>
      <div className={`w-full grid grid-cols-1 xl:grid-cols-2`}>
        <div className="w-full h-full">
          <ProductsInCart editable={false} />
        </div>
        <div
          className={`w-full flex flex-col justify-between sticky top-[137px] h-[calc(100vh-81px-56px)]  border-b border-black`}
        >
          <PlaceOrder />
        </div>
      </div>
    </>
  );
}
