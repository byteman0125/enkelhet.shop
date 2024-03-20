export interface IProduct {
  //todo: id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  type: Type;
  series: Series;
}

export type Series = 'lounge' | 'alabaster' | 'capsule';
export type Type = 'Oak' | 'Ash' | 'Walnut' | 'Wenge';
