export interface IProduct {
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

export type FinishType = 'oak' | 'ash' | 'walnut' | 'wenge';

type MeasurementsType = {
  total_height: number | null;
  seat_height: number | null;
  width: number | null;
  depth: number | null;
};
