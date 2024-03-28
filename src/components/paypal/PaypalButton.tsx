'use client';
import { PayPalButtons } from '@paypal/react-paypal-js';

export const PaypalButton = () => {
  return <PayPalButtons style={{ disableMaxWidth: true }} />;
};
