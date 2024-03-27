import { getCountries } from '@/actions';
import { getUserAddress } from '@/actions/address/get-user-address';
import { auth } from '@/auth.config';
import { ICountry } from '@/interfaces';
import Image from 'next/image';
import { AddressForm } from './ui/AddressForm';

export default async function AddressPage() {
  const countries: ICountry[] = await getCountries();
  const session = await auth();

  if (!session?.user) {
    return <h3>500 error no session available</h3>;
  }
  const address = (await getUserAddress(session.user.id)) ?? undefined;
  return (
    <>
      <p className="py-4 px-2 md:px-4 xl:px-6">SHIPPING ADDRESS</p>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 border-t border-black">
        <AddressForm countries={countries} userStoredAddress={address} />
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
