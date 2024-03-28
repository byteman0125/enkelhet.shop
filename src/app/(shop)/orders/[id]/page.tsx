import { getOrderById } from '@/actions';
import { CartItem, PaypalButton } from '@/components';
import { currencyFormat } from '@/utils';
import { redirect } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default async function OrderPage({ params }: Props) {
  const { id } = params;
  const { ok, order } = await getOrderById(id);

  if (!ok) redirect('/');

  return (
    <>
      <div className="py-4 px-2 md:px-4 xl:px-6 flex items-center justify-between w-full sticky top-[81px] z-10 bg-white border-b border-black">
        <p>ORDER - {id.split('-').at(-1)}</p>
        <div
          className={`${order!.isPaid ? 'bg-green-300' : 'bg-red-300'} px-1`}
        >
          {order!.isPaid ? 'The order is already paid' : 'Pending payment'}
        </div>
      </div>
      <div className={`w-full grid grid-cols-1 xl:grid-cols-2 `}>
        <div className="w-full h-full border-r border-black">
          {order!.OrderItem.map((item) => {
            const product = {
              id: item.product.id,
              title: item.product.title,
              price: item.price,
              finish: item.finsh,
              slug: item.product.slug,
              quantity: item.quantity,
              image: item.product.ProductImage[0].url,
            };
            return (
              <CartItem
                product={product}
                editable={false}
                key={item.product.id}
              />
            );
          })}
        </div>
        <div
          className={`w-full sticky top-[137px] h-full min-h-[calc(100vh-81px-56px)] flex flex-col justify-between`}
        >
          <div className="flex flex-col gap-5 p-8">
            <div>
              <h1 className="text-xl  font-bold">Shipping address</h1>
              <div>
                <p>
                  {order!.OrderAddress!.firstName}{' '}
                  {order!.OrderAddress!.lastName}
                </p>
                <p>{order!.OrderAddress!.address}</p>
                <p>{order!.OrderAddress!.city}</p>
                <p>ZIP {order!.OrderAddress!.postalCode}</p>
                <p>{order!.OrderAddress!.phone}</p>
              </div>
            </div>

            <div>
              <h1 className="text-xl  font-bold">Order summary</h1>
              <div className="grid grid-cols-2">
                <span>No. products</span>
                <span className="text-right">
                  {order!.itemsInOrder}{' '}
                  {order!.itemsInOrder === 1 ? 'item' : 'items'}
                </span>

                <span>Subtotal</span>
                <span className="text-right">
                  {currencyFormat(order!.subTotal)}
                </span>

                <span>Tax (15%)</span>
                <span className="text-right">{currencyFormat(order!.tax)}</span>

                <div className="flex items-center justify-between w-full border-t border-black col-span-2 mt-5 pt-2">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-right font-bold">
                    {currencyFormat(order!.total)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row md:items-center justify-between pt-8 gap-4">
            {/*
            <div
              className={`flex items-center justify-center col-span-2 md:col-span-3 w-full ${order!.isPaid ? 'bg-green-300' : 'bg-red-300'} px-4 py-4 text-sm md:text-base text-black`}
            >
              {order!.isPaid ? 'The order is already paid' : 'Pending payment'}
            </div>*/}
          </div>
          <div className="w-full py-4 px-2 md:px-4 xl:px-6">
            <PaypalButton />
          </div>
        </div>
      </div>
    </>
  );
}
