import { ICartProduct } from '@/interfaces';
import { create } from 'zustand';

interface State {
  cart: ICartProduct[];
}

export const useCartStore = create<State>()((set) => ({
  cart: [],
}));
