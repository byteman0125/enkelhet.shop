'use client';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { Loader } from '..';

export const PaypalButton = () => {
  const [{ isPending }] = usePayPalScriptReducer();

  return isPending ? (
    <div className="w-full flex items-center justify-center h-[200px]">
      <Loader />
    </div>
  ) : (
    <div className="w-full py-4 px-2 md:px-4 xl:px-6">
      <PayPalButtons style={{ disableMaxWidth: true }} />
    </div>
  );
};
