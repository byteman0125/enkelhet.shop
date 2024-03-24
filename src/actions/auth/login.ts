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
  } catch (error) {
    if ((error as any).type === 'CredentialsSignIn') {
      return 'CredentialsSignIn';
    }

    return 'UnknownError';

    // if (error instanceof AuthError) {
    //   switch (error.type) {
    //     case 'CredentialsSignin':
    //       return 'Invalid credentials.';
    //     default:
    //       return 'Something went wrong.';
    //   }
    // }
    //throw error;
  }
}
