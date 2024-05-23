'use client';
import { generatePaginationNumbers } from '@/utils';
import Link from 'next/link';
import { redirect, usePathname, useSearchParams } from 'next/navigation';

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get('page') ?? 1;

  const currentPage = isNaN(+pageString) ? 1 : +pageString;
  if (currentPage < 1 || isNaN(+pageString)) {
    redirect(pathname);
  }
  const allPages = generatePaginationNumbers(currentPage, totalPages);

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
    <>
      {totalPages <= 1 ? (
        <></>
      ) : (
        <div className="w-full flex items-center justify-center mb-24">
          <nav className="border border-black flex items-center">
            <Link
              href={createPageUrl(currentPage - 1)}
              className="border-r border-black p-2 hover:bg-gray-200"
            >
              prev
            </Link>
            <div className="h-full flex items-center">
              {allPages!.map((page, i) => (
                <Link
                  href={createPageUrl(page)}
                  key={page + '-' + i}
                  className={`hover:bg-gray-200 hover:text-black h-full py-2 px-4 ${currentPage === page ? 'bg-black text-white' : ''}`}
                >
                  {page}
                </Link>
              ))}
            </div>
            <Link
              href={createPageUrl(currentPage + 1)}
              className="border-l border-black p-2 hover:bg-gray-200"
            >
              next
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};
