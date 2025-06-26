

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
  status: 'Available' | 'Coming Soon';
};

export type Product = {
  id: string;
  name:string;
  price: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  status: 'Available' | 'Coming Soon';
};

export type HeroSlide = {
  tag: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  dataAiHint: string;
};

export type ExperienceCard = {
  category: string;
  title: string;
  imageUrl: string;
  dataAiHint: string;
  link: string;
};

export type TeaCollectionProduct = {
  name: string;
  imageUrl: string;
  dataAiHint: string;
  status: 'Available' | 'Coming Soon' | 'Unavailable';
};

export type TeaCollection = {
  id: string;
  title: string;
  description: string;
  products: TeaCollectionProduct[];
  navImage: string;
  dataAiHintNav: string;
};

export const teaCollections: TeaCollection[] = [
  {
    id: 'timeless-collections',
    title: 'Timeless Collections',
    description: 'An exquisite selection of our most cherished and enduring teas, celebrated for their consistent quality and classic character.',
    navImage: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHintNav: 'classic tea',
    products: [
      { name: 'Heritage Black', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'black tea', status: 'Available' },
      { name: 'Golden Pekoe', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Ancient Green', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'green tea', status: 'Coming Soon' },
      { name: 'White Orchid', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'white tea', status: 'Unavailable' },
      { name: 'Spiced Chai', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'chai tea', status: 'Available' },
    ],
  },
  {
    id: 'classic-range',
    title: 'Classic Range',
    description: 'Our signature blends, time-tested and adored.',
    navImage: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHintNav: 'tea plantation',
    products: [
      { name: 'Roba OP Grade', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Roba BOP1 Estate Reserve', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Roba Flowery Pekoe', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea leaves', status: 'Coming Soon' },
      { name: 'Silver Kandy', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'silver tea', status: 'Unavailable' },
      { name: 'Uva Highlands BOP', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'black tea leaves', status: 'Available' },
    ],
  },
  {
    id: 'limited-releases',
    title: 'Limited Releases',
    description: 'Rare selections harvested in micro-lots.',
    navImage: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHintNav: 'rare tea',
    products: [
      { name: 'Roba Silver Tips (Moonlight Harvest)', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Highland Gold OP Select', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Roba Twilight BOP Reserve', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea leaves', status: 'Coming Soon' },
      { name: 'First Flush Darjeeling', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'darjeeling tea', status: 'Unavailable' },
      { name: 'Golden Monkey Paw', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'golden tea', status: 'Available' },
    ],
  },
  {
    id: 'travel-exclusive',
    title: 'Travel Exclusive',
    description: 'Curated packs for discerning global travellers.',
    navImage: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHintNav: 'tea travel',
    products: [
      { name: 'Roba Voyager’s Pick', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Sunrise Trails OP Select', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Dusk Valley Highland Reserve', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea leaves', status: 'Coming Soon' },
      { name: 'Jetsetter\'s Green', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'green tea pack', status: 'Unavailable' },
      { name: 'Metropolis Black', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'black tea box', status: 'Available' },
    ],
  },
  {
    id: 'gifts-accessories',
    title: 'Gift & Accessories',
    description: 'Gifting-worthy blends and steeping essentials.',
    navImage: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHintNav: 'tea gift',
    products: [
      { name: 'Roba Collectors Gift Set', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea gift set', status: 'Available' },
      { name: 'Steep & Sip Mug', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea mug', status: 'Available' },
      { name: 'Signature Roba Tray', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea tray', status: 'Coming Soon' },
      { name: 'Tea Infuser Ball', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'tea infuser', status: 'Unavailable' },
      { name: 'Matcha Whisk Set', imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', dataAiHint: 'matcha set', status: 'Available' },
    ],
  },
];


export const experiences: ExperienceCard[] = [
  {
    category: 'Enjoy',
    title: 'Serves',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea serving',
    link: '/store'
  },
  {
    category: 'Inside',
    title: 'The Roba Tea Society',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea community people',
    link: '/our-story'
  },
  {
    category: 'Book',
    title: 'Estate Experiences',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea estate landscape',
    link: '/our-story'
  },
  {
    category: 'Discover',
    title: 'Our Six Pillars',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea making process',
    link: '/our-story'
  }
];

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
    dataAiHint: 'black tea',
    status: 'Available',
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
    dataAiHint: 'earl grey',
    status: 'Coming Soon',
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
    dataAiHint: 'green tea',
    status: 'Coming Soon',
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
    dataAiHint: 'white tea',
    status: 'Coming Soon',
  }
];

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'Classic Ceylon Black Tin (100g)',
    price: '$15.00',
    description: 'A beautiful tin containing 100g of our finest loose-leaf Classic Ceylon Black tea.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea tin',
    status: 'Available',
  },
  {
    id: 'prod_002',
    name: 'Ceylon Earl Grey Sachets (20)',
    price: '$12.00',
    description: '20 convenient, biodegradable tea sachets of our aromatic Ceylon Earl Grey.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea box',
    status: 'Available',
  },
  {
    id: 'prod_003',
    name: 'Highland Green Loose Leaf (80g)',
    price: '$18.00',
    description: '80g of premium loose-leaf Highland Green tea, perfect for a refreshing cup.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea pouch',
    status: 'Coming Soon',
  },
  {
    id: 'prod_004',
    name: 'Silver Tips White Tea Caddy (50g)',
    price: '$45.00',
    description: 'An exclusive 50g caddy of our rare and exquisite Silver Tips White Tea.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'luxury tea',
    status: 'Available',
  },
  {
    id: 'prod_005',
    name: 'Roba Tea Discovery Kit',
    price: '$35.00',
    description: 'A selection of our four signature teas in sample sizes. The perfect gift for any tea lover.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'tea gift',
    status: 'Available',
  },
    {
    id: 'prod_006',
    name: 'Artisan Tea Pot',
    price: '$55.00',
    description: 'A beautifully crafted ceramic teapot, designed for the perfect brew.',
    imageUrl: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9',
    dataAiHint: 'teapot',
    status: 'Coming Soon',
  }
];
