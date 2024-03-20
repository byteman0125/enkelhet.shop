import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form className="max-w-[600px] w-full h-[800px] bg-white border border-black p-8 flex flex-col">
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
            placeholder="Email"
            className="border border-black p-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-black p-3"
          />
          <input
            type="password"
            placeholder="Repeat password"
            className="border border-black p-3"
          />
        </div>
        <div className="w-full flex items-center mb-8">
          <button className="flex items-center justify-center col-span-2 md:col-span-3 w-full bg-black px-4 py-4 text-white text-sm md:text-base ">
            Register
          </button>
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
    </div>
  );
}
