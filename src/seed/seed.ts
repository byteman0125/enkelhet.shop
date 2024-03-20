interface IProduct {
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

type Series = 'lounge' | 'alabaster' | 'capsule';
type Type = 'Oak' | 'Ash' | 'Walnut' | 'Wenge';

interface SeedData {
  series: string[];
  products: IProduct[];
}

export const initialData: SeedData = {
  series: ['lounge', 'alabaster', 'capsule'],
  products: [
    {
      description: `La Pepino is a collection of seating variations, built on the repeating pattern of cylindrical cushions, and supported by an organically shaped base. Every piece comes fully upholstered in customisable fabrics, and plays with the different points of contact between cushion and body.`,
      images: ['/example.jpg', '/example-2.webp'],
      type: 'Oak',
      inStock: 10,
      price: 1800,
      slug: 'aluminum-ottomans',
      tags: ['tag'],
      title: 'ALUMINUM OTTOMAN',
      series: 'alabaster',
    },
    {
      description: `La Pepino is a collection of seating variations, built on the repeating pattern of cylindrical cushions, and supported by an organically shaped base. Every piece comes fully upholstered in customisable fabrics, and plays with the different points of contact between cushion and body.`,
      images: ['/example.jpg', '/example-2.webp'],
      type: 'Oak',
      inStock: 10,
      price: 1800,
      slug: 'aluminum-ottoman',
      tags: ['tag'],
      title: 'ALUMINUM OTTOMAN',
      series: 'alabaster',
    },
    {
      description: `La Pepino is a collection of seating variations, built on the repeating pattern of cylindrical cushions, and supported by an organically shaped base. Every piece comes fully upholstered in customisable fabrics, and plays with the different points of contact between cushion and body.`,
      images: ['/example.jpg', '/example-2.webp'],
      type: 'Oak',
      inStock: 10,
      price: 1800,
      slug: 'aluminum-ottomano',
      tags: ['tag'],
      title: 'ALUMINUM OTTOMAN',
      series: 'alabaster',
    },
  ],
};
