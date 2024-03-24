'use client';
import { authenticate } from '@/actions';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';

export const LogInForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);

  return (
    <form
      action={dispatch}
      className="max-w-[600px] w-full h-[800px] bg-white border border-black p-8 flex flex-col"
    >
      <Link
        href="/"
        className="font-black text-2xl font-sans md:text-5xl mb-8 w-fit"
      >
        enkelhet
      </Link>
      <p className="mb-2">LOGIN</p>
      <div className="flex flex-col gap-3  mb-8">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="border border-black p-3"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="border border-black p-3"
        />
      </div>
      <div className="w-full flex items-center mb-8">
        <LoginButton />
      </div>
      <div className="h-5">
        {state === 'CredentialsSignIn' && (
          <p className="text-red-400">Invalid email or password</p>
        )}
      </div>
      <div className="w-full flex items-center justify-end mb-8">
        <Link
          href="/auth/register"
          className="hover:underline underline-offset-2"
        >
          Create new account
        </Link>
      </div>
      <div className="w-full h-px bg-black mb-8"></div>
      <div className="w-full flex items-center">
        <button className="flex items-center justify-center col-span-2 md:col-span-3 w-full bg-black px-4 py-4 text-white text-sm md:text-base ">
          Log In with Google
        </button>
      </div>
    </form>
  );
};

const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`flex items-center justify-center col-span-2 md:col-span-3 w-full px-4 py-4 text-white text-sm md:text-base h-14 bg-black`}
      disabled={pending}
    >
      {pending ? (
        <span className="typing-animation"></span>
      ) : (
        <span>Log In</span>
      )}
    </button>
  );
};
