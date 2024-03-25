'use client';

import { registerUser } from '@/actions';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setErrorMessage('');
    const { name, email, password } = data;
    const res = await registerUser(name, email, password);

    if (!res.ok) {
      setErrorMessage(res.message);
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    console.log({ res });
  };

  const requireError =
    errors.email?.type === 'required' ||
    errors.name?.type == 'required' ||
    errors.password?.type == 'required';

  return (
    <>
      <form
        className="max-w-[600px] w-full h-full md:h-[800px] bg-white border border-black p-8 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Link
          href="/"
          className="font-black text-2xl font-sans md:text-5xl mb-8 w-fit"
        >
          enkelhet
        </Link>
        <p className="mb-2">REGISTER</p>
        <div className="flex flex-col gap-3  mb-8">
          <input
            type="text"
            placeholder="Full Name"
            className={`border p-3 ${errors.name ? 'border-red-400' : 'border-black'} outline-none`}
            {...register('name', { required: true })}
            autoFocus
          />
          <input
            type="text"
            placeholder="Email"
            className={`border p-3 ${errors.email ? 'border-red-400' : 'border-black'} outline-none`}
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />

          <div className="w-full flex items-center relative">
            <input
              type={visible ? 'text' : 'password'}
              placeholder="Password"
              className={`border p-3 ${errors.password ? 'border-red-400' : 'border-black'} w-full outline-none`}
              {...register('password', { required: true, minLength: 6 })}
            />
            <button
              className="absolute right-3 mt-auto mb-auto top-0 bottom-0"
              onClick={(e) => {
                e.preventDefault();
                setVisible(!visible);
              }}
            >
              {visible ? (
                <svg
                  stroke="black"
                  fill="black"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z"></path>
                </svg>
              ) : (
                <svg
                  stroke="black"
                  fill="black"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z"></path>
                </svg>
              )}
            </button>
          </div>
          <div className="h-5 text-sm text-gray-500">
            <p>Min. length 6</p>
          </div>
        </div>
        <div className="w-full flex items-center mb-8">
          <button
            className={`flex items-center justify-center col-span-2 md:col-span-3 w-full px-4 py-4 text-white text-sm md:text-base ${'bg-black'}`}
          >
            Register
          </button>
        </div>
        <div className="h-5">
          <p className="text-red-400">
            {requireError && 'Some fields are required'}
            {!requireError &&
              errors.password?.type == 'minLength' &&
              'Password must be minimum 6 characters'}
          </p>
        </div>
        <div className="w-full flex items-center justify-end mb-8">
          <Link
            href="/auth/login"
            className="hover:underline underline-offset-2"
          >
            Have an account already?
          </Link>
        </div>
        <div className="w-full h-px bg-black mb-8"></div>
        <div className="w-full flex items-center">
          <button className="flex items-center justify-center col-span-2 md:col-span-3 w-full bg-black px-4 py-4 text-white text-sm md:text-base ">
            Sign In with Google
          </button>
        </div>
      </form>
      {errorMessage && (
        <div className="p-4 bg-black text-white absolute bottom-12">
          {errorMessage}
        </div>
      )}
    </>
  );
};
