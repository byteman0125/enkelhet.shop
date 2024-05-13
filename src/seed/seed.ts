import bcyptjs from 'bcryptjs';

export interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  finish: ('oak' | 'ash' | 'walnut' | 'wenge' | 'blue' | 'green' | 'red')[];
  series: 'lounge' | 'alabaster' | 'capsule';
  measurements: MeasurementsType;
  model?: string[];
}

export interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

type MeasurementsType = {
  total_height: number;
  seat_height: number;
  width: number;
  depth: number;
};

interface SeedData {
  users: SeedUser[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'tomas@google.com',
      name: 'Tomas Ferreras',
      password: bcyptjs.hashSync('12345678'),
      role: 'admin',
    },
    {
      email: 'victoria@google.com',
      name: 'Victoria Plaza',
      password: bcyptjs.hashSync('12345678'),
      role: 'user',
    },
  ],
  products: [
    {
      description: `Capsules is a furniture series based on the evolution of the geometric form of a capsule, which consists of a cylinder with two hemispherical ends. Playing with the positive and negative space of its shape, the collection becomes an exploration of rounded and organic shapes.`,
      images: ['/products/lounge_chair.jpg', '/products/lounge_chair_2.jpg'],
      inStock: 5,
      price: 1800,
      slug: 'lounge_chair',
      tags: [''],
      title: 'LOUNGE CHAIR',
      series: 'capsule',
      model: [
        'https://res.cloudinary.com/djzdzdxy3/image/upload/v1715632884/chair_fp3kxw.glb',
      ],
      measurements: {
        total_height: 90,
        seat_height: 40,
        width: 52,
        depth: 60,
      },
      finish: ['ash', 'oak', 'walnut', 'wenge', 'blue', 'green', 'red'],
    },
    {
      description: `Formica is enkelhet first series, marking the beginning of the brand and workshop. The collection presents a series of seating variations in baltic birch plywood, a neutral material fit for any type of home or interior design project. As a means to be open and customisable, the series comes with a collection of add-ons in formica, which allows for a more playful and colourful design.`,
      images: ['/products/rocker.jpg', '/products/rocker_2.jpg'],
      inStock: 8,
      price: 1500,
      slug: 'rocker',
      tags: [''],
      title: 'ROCKER',
      series: 'alabaster',
      measurements: {
        total_height: 85,
        seat_height: 45,
        width: 60,
        depth: 80,
      },
      model: [
        'https://res.cloudinary.com/djzdzdxy3/image/upload/v1715632884/chair_fp3kxw.glb',
      ],
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description: `Capsules is a furniture series based on the evolution of the geometric form of a capsule, which consists of a cylinder with two hemispherical ends. Playing with the positive and negative space of its shape, the collection becomes an exploration of rounded and organic shapes.`,
      images: [
        '/products/side_table_stool.jpg',
        '/products/side_table_stool_2.jpg',
      ],
      inStock: 16,
      price: 600,
      slug: 'side_table_stool',
      tags: [''],
      title: 'SIDE TABLE / STOOL',
      series: 'capsule',
      measurements: {
        total_height: 45,
        seat_height: 45,
        width: 38,
        depth: 38,
      },
      model: [
        'https://res.cloudinary.com/djzdzdxy3/image/upload/v1715632884/chair_fp3kxw.glb',
      ],
      finish: ['ash', 'walnut', 'wenge'],
    },
    {
      description: `La Pepino is a collection of seating variations, built on the repeating pattern of cylindrical cushions, and supported by an organically shaped base. Every piece comes fully upholstered in customisable fabrics, and plays with the different points of contact between cushion and body.`,
      images: ['/products/ottoman.jpg', '/products/ottoman_2.jpg'],
      inStock: 24,
      price: 1200,
      slug: 'aluminum_ottoman',
      tags: [''],
      title: 'ALUMINUM OTTOMAN',
      series: 'alabaster',
      measurements: {
        total_height: 46,
        seat_height: 46,
        width: 70,
        depth: 56,
      },
      model: [
        'https://res.cloudinary.com/djzdzdxy3/image/upload/v1715632884/chair_fp3kxw.glb',
      ],
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description: `Formica is enkelhet first series, marking the beginning of the brand and workshop. The collection presents a series of seating variations in baltic birch plywood, a neutral material fit for any type of home or interior design project. As a means to be open and customisable, the series comes with a collection of add-ons in formica, which allows for a more playful and colourful design.`,
      images: ['/products/stool.jpg', '/products/stool_2.jpg'],
      inStock: 21,
      price: 550,
      slug: 'stool',
      tags: [''],
      title: 'STOOL',
      series: 'lounge',
      measurements: {
        total_height: 50,
        seat_height: 45,
        width: 45,
        depth: 45,
      },
      model: [
        'https://res.cloudinary.com/djzdzdxy3/image/upload/v1715632884/chair_fp3kxw.glb',
      ],
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description: `Formica is enkelhet first series, marking the beginning of the brand and workshop. The collection presents a series of seating variations in baltic birch plywood, a neutral material fit for any type of home or interior design project. As a means to be open and customisable, the series comes with a collection of add-ons in formica, which allows for a more playful and colourful design.`,
      images: ['/products/chair.jpg', '/products/chair_2.jpg'],
      inStock: 4,
      price: 900,
      slug: 'chair',
      tags: [''],
      title: 'CHAIR',
      series: 'capsule',
      measurements: {
        total_height: 85,
        seat_height: 45,
        width: 45,
        depth: 50,
      },
      model: [
        'https://res.cloudinary.com/djzdzdxy3/image/upload/v1715632884/chair_fp3kxw.glb',
      ],
      finish: ['ash', 'oak', 'walnut'],
    },
  ],
};
