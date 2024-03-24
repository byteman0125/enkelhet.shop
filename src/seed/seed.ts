import bcyptjs from 'bcryptjs';

export interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  finish: ('oak' | 'ash' | 'walnut' | 'wenge')[];
  series: 'lounge' | 'alabaster' | 'capsule';
  measurements: MeasurementsType;
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
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. ',
      images: ['example.jpg', 'example-2.webp'],
      inStock: 7,
      price: 75,
      slug: 'mens_chill_crew_neck_sweatshirt',
      tags: [''],
      title: 'Men’s Chill Crew Neck Sweatshirt',
      series: 'lounge',
      measurements: {
        total_height: 85,
        seat_height: 45,
        width: 60,
        depth: 80,
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons.",
      images: ['example.jpg', 'example-2.webp'],
      inStock: 5,
      price: 200,
      slug: 'men_quilted_shirt_jacket',
      tags: [''],
      title: "Men's Quilted Shirt Jacket",
      series: 'alabaster',
      measurements: {
        total_height: 85,
        seat_height: 45,
        width: 60,
        depth: 80,
      },
      finish: ['ash', 'oak', 'walnut', 'wenge'],
    },
  ],
};
