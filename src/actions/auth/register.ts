'use server';

import prisma from '@/utils/prisma';
import bcryptjs from 'bcryptjs';
export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: bcryptjs.hashSync(password),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return {
      ok: true,
      user,
      message: 'User created successfully',
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'User registration failed',
    };
  }
};
