export type FinishType =
  | 'oak'
  | 'ash'
  | 'walnut'
  | 'wenge'
  | 'green'
  | 'blue'
  | 'red';

type MeasurementsType = {
  total_height: number | null;
  seat_height: number | null;
  width: number | null;
  depth: number | null;
};

export interface IProduct {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  measurements: MeasurementsType;
  finish: FinishType[];
  series: 'lounge' | 'alabaster' | 'capsule';
}

export interface ICartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  finish: FinishType;
  image: string;
}
export interface IProductImage {
  id: number;
  url: string;
}
export interface IProductModel {
  id: number;
  url: string;
}
