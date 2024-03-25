import Image from 'next/image';
import { AddressForm } from './ui/AddressForm';

export default function AddressPage() {
  return (
    <>
      <p className="py-4 px-2 md:px-4 xl:px-6">SHIPPING ADDRESS</p>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 border-t border-black">
        <AddressForm />
        <div className="hidden xl:block w-full h-[calc(100vh-81px-56px)] relative">
          <Image
            src={`/address-image.jpg`}
            alt="address image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </>
  );
}
