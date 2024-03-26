'use server';

import { IAddress } from '@/interfaces';
import prisma from '@/utils/prisma';

export const setUserAddress = async (address: IAddress, userId: string) => {
  try {
    const saveAddress = await createOrReplaceAddress(address, userId);
    return {
      ok: true,
      address: saveAddress,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'User address relation failed',
    };
  }
};

const createOrReplaceAddress = async (address: IAddress, userId: string) => {
  try {
    const storedAddress = await prisma.userAddress.findUnique({
      where: {
        userId,
      },
    });

    const addressToSave = {
      userId: userId,
      address: address.address,
      address2: address.address2,
      countryId: address.country,
      firstName: address.firstName,
      lastName: address.lastName,
      phone: address.phone,
      postalCode: address.postalCode,
    };

    if (!storedAddress) {
      const newAddress = await prisma.userAddress.create({
        data: addressToSave,
      });

      return newAddress;
    }

    const updatedAddress = await prisma.userAddress.update({
      where: {
        userId,
      },
      data: addressToSave,
    });

    return updatedAddress;
  } catch (error) {
    console.log(error);
    throw new Error('Adding address failed');
  }
};
