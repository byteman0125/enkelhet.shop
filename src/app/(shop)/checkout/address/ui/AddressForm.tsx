'use client';
import { deleteUserAddress, setUserAddress } from '@/actions';
import { IAddress, ICountry } from '@/interfaces';
import { useAddressStore } from '@/store';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type FormInputs = {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  rememberAddress?: boolean;
};

interface Props {
  countries: ICountry[];
  userStoredAddress?: Partial<IAddress>;
}

export const AddressForm = ({ countries, userStoredAddress = {} }: Props) => {
  const router = useRouter();
  const { setAddress, address } = useAddressStore();
  const {
    handleSubmit,
    register,
    formState: { isValid },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      ...(userStoredAddress as any),
      rememberAddress: false,
    },
  });

  const { data: session } = useSession({ required: true });

  useEffect(() => {
    if (address.firstName) {
      reset(address);
    }
  }, []);

  const onSubmit = (data: FormInputs) => {
    const { rememberAddress, ...rest } = data;
    setAddress(rest);
    if (rememberAddress) {
      setUserAddress(data, session!.user.id);
    } else {
      deleteUserAddress(session!.user.id);
    }
    router.push('/checkout');
  };

  return (
    <form
      className="w-full h-full py-4 px-2 md:px-4 xl:px-6 flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl">Personal info</h2>
        <div className="grid grid-cols-2 border border-black outline-none">
          <input
            type="text"
            placeholder="First Name"
            className="border-r border-black p-3 outline-none"
            {...register('firstName', { required: true })}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 outline-none"
            {...register('lastName', { required: true })}
          />
          <input
            type="text"
            placeholder="Phone number"
            className="p-3 border-t border-black col-span-2 outline-none"
            {...register('phone', { required: true })}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl">Shipping address info</h2>
        <div className="grid grid-cols-2 border border-black outline-none">
          <input
            type="text"
            placeholder="Address"
            className="border-r border-black p-3 outline-none"
            {...register('address', { required: true })}
          />
          <input
            type="text"
            placeholder="Second address (optional)"
            className="p-3 outline-none"
            {...register('address2')}
          />
          <input
            type="text"
            placeholder="ZIP code"
            className="border-t border-r border-black p-3 outline-none"
            {...register('postalCode', { required: true })}
          />
          <input
            type="text"
            placeholder="City"
            className="p-3 border-t border-black outline-none"
            {...register('city', { required: true })}
          />

          <select
            className="p-3 border-t border-black col-span-2 outline-none"
            {...register('country', { required: true })}
          >
            <option value="">[ Select country ]</option>
            {countries.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-3 mt-8">
          <input
            type="checkbox"
            id="checkbox"
            {...register('rememberAddress')}
          />
          <label htmlFor="checkbox">Do you want to save the address?</label>
        </div>
        <div className="w-full flex items-center mt-8">
          <button
            disabled={!isValid}
            type="submit"
            className={`flex items-center justify-center col-span-2 md:col-span-3 w-full px-4 py-4 text-white text-sm md:text-base ${isValid ? 'bg-black' : 'bg-gray-500'}`}
          >
            Continue to summary
          </button>
        </div>
      </div>
    </form>
  );
};
