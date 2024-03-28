import { ICartProduct } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  cart: ICartProduct[];
  getTotalItems: () => number;
  getSummaryData: () => {
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };
  addToCart: (product: ICartProduct) => void;
  updateProductQuantity: (product: ICartProduct, quantity: number) => void;
  removeCartProduct: (product: ICartProduct) => void;
  clearCart: () => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },
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
      updateProductQuantity: (product: ICartProduct, quantity: number) => {
        const { cart } = get();

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.finish === product.finish) {
            return {
              ...item,
              quantity: quantity,
            };
          }
          return item;
        });

        set({
          cart: updatedCartProducts,
        });
      },
      removeCartProduct: (product: ICartProduct) => {
        const { cart } = get();
        const productInCart = cart.filter(
          (item) => item.id !== product.id || item.finish !== product.finish
        );
        set({
          cart: productInCart,
        });
      },
      getSummaryData: () => {
        const { cart } = get();
        const subTotal = cart.reduce(
          (subTotal, product) => product.quantity * product.price + subTotal,
          0
        );
        const tax = subTotal * 0.15;
        const total = subTotal + tax;
        const itemsInCart = cart.reduce(
          (total, item) => total + item.quantity,
          0
        );

        return {
          subTotal,
          tax,
          total,
          itemsInCart,
        };
      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: 'shopping-cart',
    }
  )
);
