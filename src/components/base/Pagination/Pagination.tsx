'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) ?? 1;

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    if (pageNumber === '...') {
      return `${pathname}?${params.toString()}`;
    }

    if (+pageNumber <= 0) {
      return `${pathname}`;
    }

    if (+pageNumber > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="w-full flex items-center justify-center mb-24">
      <nav className="border border-black flex items-center">
        <Link
          href={createPageUrl(currentPage - 1)}
          className="border-r border-black p-2 hover:bg-gray-200"
        >
          prev
        </Link>
        <ul className="h-full flex items-center">
          <li
            className={`hover:bg-gray-200 h-full py-2 px-4 ${true ? 'bg-black text-white' : ''}`}
          >
            1
          </li>
          <li
            className={`hover:bg-gray-200 h-full py-2 px-4 ${true ? 'bg-black text-white' : ''}`}
          >
            2
          </li>
          <li
            className={`hover:bg-gray-200 h-full py-2 px-4 ${true ? 'bg-black text-white' : ''}`}
          >
            3
          </li>
          <li
            className={`hover:bg-gray-200 h-full py-2 px-4 ${true ? 'bg-black text-white' : ''}`}
          >
            ...
          </li>
        </ul>
        <Link
          href={createPageUrl(currentPage + 1)}
          className="border-l border-black p-2 hover:bg-gray-200"
        >
          next
        </Link>
      </nav>
    </div>
  );
};
