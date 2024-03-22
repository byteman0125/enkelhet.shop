export interface IProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  measurements: MeasurementsType;
  finish: ('oak' | 'ash' | 'walnut' | 'wenge')[];
  series: 'lounge' | 'alabaster' | 'capsule';
}

type MeasurementsType = {
  total_height: number | null;
  seat_height: number | null;
  width: number | null;
  depth: number | null;
};
