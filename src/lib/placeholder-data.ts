
export type TeaVariety = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  origin: string;
  flavorProfile: string;
  brewingMethod: string;
  imageUrl: string;
  dataAiHint: string;
};

export type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
};

export type HeroSlide = {
  tag: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  dataAiHint: string;
};

export const heroSlides: HeroSlide[] = [
  {
    tag: 'Discover',
    title: 'The Soul of Ceylon, in a Cup',
    buttonText: 'Explore Our Teas',
    buttonLink: '/store',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea plantation'
  },
  {
    tag: 'Timeless',
    title: 'A Legacy of Unmatched Quality',
    buttonText: 'Read Our Story',
    buttonLink: '/our-story',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea ceremony'
  },
  {
    tag: 'Exquisite',
    title: 'Handpicked for Pure Perfection',
    buttonText: 'View Tea Varieties',
    buttonLink: '/tea-varieties',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea leaves'
  }
];


export const teaVarieties: TeaVariety[] = [
  {
    slug: 'ceylon-black',
    name: 'Classic Ceylon Black',
    shortDescription: 'A bold and robust classic, with notes of citrus and spice.',
    longDescription: 'Our Classic Ceylon Black tea is a timeless favorite, sourced from the Dimbula region. It has a full-bodied flavor with a crisp aroma, making it a perfect breakfast tea. It can be enjoyed on its own or with a splash of milk.',
    origin: 'Dimbula, Sri Lanka',
    flavorProfile: 'Bold, Robust, Citrus, Spice',
    brewingMethod: 'Steep 1 tsp of tea in 200ml of water at 95°C (203°F) for 3-5 minutes.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'black tea'
  },
  {
    slug: 'earl-grey',
    name: 'Ceylon Earl Grey',
    shortDescription: 'A bright and fragrant blend with a distinctive bergamot aroma.',
    longDescription: 'A sophisticated blend of high-grown Ceylon black tea and natural bergamot oil. This Earl Grey is exceptionally bright and aromatic, with a smooth finish. Ideal for an afternoon pick-me-up.',
    origin: 'Nuwara Eliya, Sri Lanka',
    flavorProfile: 'Fragrant, Citrus, Floral, Bergamot',
    brewingMethod: 'Steep 1 tsp of tea in 200ml of water at 90°C (194°F) for 3 minutes.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'earl grey'
  },
  {
    slug: 'green-tea',
    name: 'Highland Green',
    shortDescription: 'A delicate and refreshing green tea with a light, grassy flavor.',
    longDescription: 'Grown in the highlands of Uva, our green tea is pan-fired to preserve its delicate flavors and antioxidants. It has a light, vegetal taste with a hint of sweetness and a clean finish.',
    origin: 'Uva, Sri Lanka',
    flavorProfile: 'Delicate, Grassy, Sweet, Refreshing',
    brewingMethod: 'Steep 1 tsp of tea in 200ml of water at 80°C (176°F) for 2-3 minutes.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'green tea'
  },
  {
    slug: 'white-tea',
    name: 'Silver Tips White Tea',
    shortDescription: 'An exquisite and rare tea with subtle notes of honey and melon.',
    longDescription: 'Known as the "Emperor\'s Tea," Silver Tips are hand-picked buds from a special tea plant. This minimal-process tea is incredibly delicate and sought after for its nuanced flavor and high antioxidant content.',
    origin: 'Adam\'s Peak, Sri Lanka',
    flavorProfile: 'Subtle, Honey, Melon, Smooth',
    brewingMethod: 'Steep 2 tsp of tea in 200ml of water at 75°C (167°F) for 5-7 minutes.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'white tea'
  }
];

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'Classic Ceylon Black Tin (100g)',
    price: '$15.00',
    description: 'A beautiful tin containing 100g of our finest loose-leaf Classic Ceylon Black tea.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea tin'
  },
  {
    id: 'prod_002',
    name: 'Ceylon Earl Grey Sachets (20)',
    price: '$12.00',
    description: '20 convenient, biodegradable tea sachets of our aromatic Ceylon Earl Grey.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea box'
  },
  {
    id: 'prod_003',
    name: 'Highland Green Loose Leaf (80g)',
    price: '$18.00',
    description: '80g of premium loose-leaf Highland Green tea, perfect for a refreshing cup.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea pouch'
  },
  {
    id: 'prod_004',
    name: 'Silver Tips White Tea Caddy (50g)',
    price: '$45.00',
    description: 'An exclusive 50g caddy of our rare and exquisite Silver Tips White Tea.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'luxury tea'
  },
  {
    id: 'prod_005',
    name: 'Roba Tea Discovery Kit',
    price: '$35.00',
    description: 'A selection of our four signature teas in sample sizes. The perfect gift for any tea lover.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea gift'
  },
    {
    id: 'prod_006',
    name: 'Artisan Tea Pot',
    price: '$55.00',
    description: 'A beautifully crafted ceramic teapot, designed for the perfect brew.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'teapot'
  }
];
