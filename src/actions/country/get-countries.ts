'use server';

import prisma from '@/utils/prisma';

export const getCountries = async () => {
  try {
    const countries = await prisma.country.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return countries;
  } catch (error) {
    return [];
  }
};
