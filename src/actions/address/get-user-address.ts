'use server';

import prisma from '@/utils/prisma';

export const getUserAddress = async (userId: string) => {
  try {
    const address = await prisma.userAddress.findUnique({
      where: { userId },
    });

    if (!address) return null;

    const { countryId, address2, ...rest } = address;

    return {
      ...rest,
      address2: address2 ? address2 : '',
      countryId,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
