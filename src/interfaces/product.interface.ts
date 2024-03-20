export interface IProduct {
  images: string[];
  title: string;
  price: number;
  description: string;
  slug: string;
  inStock: number;
  measurements: MeasurementType;
  finish: FinishType[];
  tags: string[];
  series: SeriesType;
}
type MeasurementType = {
  totalHeight: string;
  depth: string;
  width: string;
};

type SeriesType = 'lounge' | 'alabaster' | 'capsule';
type FinishType = 'Oak' | 'Ash' | 'Walnut' | 'Wenge';

export interface ISeedData {
  series: string[];
  products: IProduct[];
}
