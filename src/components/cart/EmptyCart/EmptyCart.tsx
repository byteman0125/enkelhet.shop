import Link from 'next/link';

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
      <h1 className="font-black text-[10vw]">(O.O)</h1>
      <p className="text-base mb-8">
        Oh, it looks like you have no articles in your cart
      </p>
      <Link
        href="/"
        className="bg-gray-200 px-4 py-2 rounded-md flex items-center gap-4"
      >
        <span>Go to the shop and have a look</span>
        <svg
          width="19"
          height="14"
          viewBox="0 0 19 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7H17M17 7L11 1M17 7L11 13"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </Link>
    </div>
  );
};
