import Image from 'next/image';
import Link from 'next/link';

export default function AddressPage() {
  return (
    <>
      <p className="py-4 px-2 md:px-4 xl:px-6">SHIPPING ADDRESS</p>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 border-t border-black">
        <div className="w-full h-full py-4 px-2 md:px-4 xl:px-6 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Personal info</h2>
            <div className="grid grid-cols-2 border border-black">
              <input
                type="text"
                placeholder="First Name"
                className="border-r border-black p-3"
              />
              <input type="text" placeholder="Last Name" className="p-3" />
              <input
                type="text"
                placeholder="Phone number"
                className="p-3 border-t border-black col-span-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Shipping address info</h2>
            <div className="grid grid-cols-2 border border-black">
              <input
                type="text"
                placeholder="Address"
                className="border-r border-black p-3"
              />
              <input
                type="text"
                placeholder="Second address (optional)"
                className="p-3"
              />
              <input
                type="text"
                placeholder="ZIP code"
                className="border-t border-r border-black p-3"
              />
              <input
                type="text"
                placeholder="City"
                className="p-3 border-t border-black"
              />
              <input
                type="text"
                placeholder="Country"
                className="p-3 border-t border-black col-span-2"
              />
            </div>
            <div className="w-full flex items-center mt-8">
              <Link
                href={`/checkout`}
                className="flex items-center justify-center col-span-2 md:col-span-3 w-full bg-black px-4 py-4 text-white text-sm md:text-base "
              >
                Continue to summary
              </Link>
            </div>
          </div>
        </div>
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
