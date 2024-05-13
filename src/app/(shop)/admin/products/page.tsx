import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination } from '@/components';
import { currencyFormat } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function AdminProductsPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    take: 5,
  });

  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 flex items-center justify-between w-full sticky top-[81px] z-10 bg-white border-b border-black">
        <p>PRODUCTS - admin</p>
        <Link
          href={`/admin/product/new`}
          className="bg-black text-white px-4 py-1"
        >
          new product +
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left rtl:text-right">
          <thead className="uppercase  py-4 px-2 md:px-4 xl:px-6 border-b border-black bg-black text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Series
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Stock
              </th>
              <th scope="col" className="px-6 py-3">
                Finishes
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                className="bg-white border-b border-black hover:bg-gray-200"
                key={product.id}
              >
                <td
                  scope="row"
                  className="px-6 py-2 whitespace-nowrap font-normal"
                >
                  <Image
                    src={
                      product.images[0]
                        ? `${product.images[0]}`
                        : `/placeholder.png`
                    }
                    alt={`${product.title}`}
                    width={100}
                    height={100}
                    className="aspect-square border border-black"
                  />
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={`/admin/product/${product.slug}`}
                    className="hover:underline underline-offset-2"
                  >
                    {product.title}
                  </Link>
                </td>
                <td className="px-6 py-4">{product.series}</td>
                <td className="px-6 py-4">{currencyFormat(product.price)}</td>
                <td className={`px-6 py-4 `}>
                  <p
                    className={`${product.inStock >= 1 ? '' : 'bg-red-400'} w-fit`}
                  >
                    {product.inStock >= 1 ? product.inStock : 'No stock'}
                  </p>
                </td>
                <td className={`px-6 py-4 `}>
                  <div className="flex items-center gap-2">
                    {product.finish.map((finishItem) => (
                      <div className="h-4 w-4 relative" key={finishItem}>
                        <Image
                          src={`/woods/${finishItem}.jpg`}
                          alt={`${finishItem} wood`}
                          width={16}
                          height={16}
                          className="rounded-full h-4 w-4"
                        />
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="absolute bottom-0 bg-white left-0 right-0 mx-auto">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
