'use server';

import prisma from '@/utils/prisma';

export const deleteUserAddress = async (userId: string) => {
  try {
    await prisma.userAddress.delete({
      where: {
        userId,
      },
    });

    return { ok: true };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'Address delete failed',
    };
  }
};
