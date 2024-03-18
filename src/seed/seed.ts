import { ISeedData } from '@/interfaces';

export const initialData: ISeedData = {
  products: [
    {
      description: `La Pepino is a collection of seating variations, built on the repeating pattern of cylindrical cushions, and supported by an organically shaped base. Every piece comes fully upholstered in customisable fabrics, and plays with the different points of contact between cushion and body.`,
      finish: ['Ash', 'Oak', 'Walnut'],
      images: ['/example.jpg', '/example-2.webp'],
      measurements: {
        depth: '60',
        width: '52',
        totalHeight: '90',
      },
      price: 1800,
      slug: 'ALUMINUM OTTOMAN',
      title: 'ALUMINUM OTTOMAN',
      inStock: 10,
      tags: ['tag'],
    },
  ],
};
