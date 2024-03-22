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
  total_height: string;
  seat_height: string;
  width: string;
  depth: string;
};
