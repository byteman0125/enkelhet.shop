export interface IProduct {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  //todo:finish: Finish;
  series: Series;
}

export type Series = 'lounge' | 'alabaster' | 'capsule';
export type Finish = 'Oak' | 'Ash' | 'Walnut' | 'Wenge';
