import Link from 'next/link';

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const active = true;
  return (
    <div className="w-full flex items-center justify-center mb-24">
      <nav className="border border-black flex items-center">
        <Link
          href={`/`}
          className="border-r border-black p-2 hover:bg-gray-200"
        >
          prev
        </Link>
        <ul className="h-full flex items-center">
          <li
            className={`hover:bg-gray-200 h-full py-2 px-4 ${active ? 'bg-black text-white' : ''}`}
          >
            1
          </li>
          <li
            className={`hover:bg-gray-200 h-full py-2 px-4 ${active ? 'bg-black text-white' : ''}`}
          >
            2
          </li>
          <li
            className={`hover:bg-gray-200 h-full py-2 px-4 ${active ? 'bg-black text-white' : ''}`}
          >
            3
          </li>
        </ul>
        <Link
          href={`/`}
          className="border-l border-black p-2 hover:bg-gray-200"
        >
          next
        </Link>
      </nav>
    </div>
  );
};
