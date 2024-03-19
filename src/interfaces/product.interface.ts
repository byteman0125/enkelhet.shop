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

type SeriesType = 'lounge' | 'alabaster' | 'capsule';
type FinishType = 'Oak' | 'Ash' | 'Walnut' | 'Wenge';
type MeasurementType = {
  totalHeight: string;
  depth: string;
  width: string;
};

export interface ISeedData {
  products: IProduct[];
}
