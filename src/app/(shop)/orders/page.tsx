export const revalidate = 0;
import { getOrderByUser } from '@/actions';
import Link from 'next/link';

export default async function OrdersPage() {
  const { orders = [] } = await getOrderByUser();

  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 flex items-center justify-between w-full sticky top-[65px] md:top-[81px] z-10 bg-white border-b border-black">
        <p>ORDERS</p>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left rtl:text-right">
          <thead className="uppercase  py-4 px-2 md:px-4 xl:px-6 border-b border-black bg-black text-white">
            <tr>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Product ID
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Payment status
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                options
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className="bg-white border-b border-black" key={order.id}>
                <th
                  scope="row"
                  className="px-6 py-4 whitespace-nowrap font-normal"
                >
                  {order.id}
                </th>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.OrderAddress!.firstName} {order.OrderAddress!.lastName}
                </td>
                <td className={`px-6 py-4 `}>
                  <p
                    className={`${order!.isPaid ? 'bg-green-400' : 'bg-red-400'} w-fit whitespace-nowrap`}
                  >
                    {order!.isPaid
                      ? 'The order is already paid'
                      : 'Pending payment'}
                  </p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    href={`/orders/${order.id}`}
                    className="hover:underline underline-offset-2"
                  >
                    check order
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
