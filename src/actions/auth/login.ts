'use server';
import { signIn } from '@/auth.config';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    return 'Success';
  } catch (error: any) {
    if (error.type === 'CredentialsSignin') return 'CredentialsSignin';

    return 'UnknownError';
  }
}

export const login = async (email: string, password: string) => {
  try {
    await signIn('credentials', { email, password });
    return {
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'User login failed',
    };
  }
};
