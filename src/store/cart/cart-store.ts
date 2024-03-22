import { ICartProduct } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  cart: ICartProduct[];
  addToCart: (product: ICartProduct) => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: ICartProduct) => {
        const { cart } = get();
        const productInCart = cart.some(
          (item) => item.id === product.id && item.finish === product.finish
        );
        if (!productInCart) {
          set({
            cart: [...cart, product],
          });
          return;
        }

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.finish === product.finish) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }
          return item;
        });

        set({
          cart: updatedCartProducts,
        });
      },
    }),
    {
      name: 'shopping-cart',
    }
  )
);
