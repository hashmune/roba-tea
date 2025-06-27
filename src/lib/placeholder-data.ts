
export type TeaVariety = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  origin: string;
  flavorProfile: string;
  brewingMethod:string;
  imageUrls: string[];
  dataAiHint: string;
  status: 'Available' | 'Coming Soon';
};

export type Product = {
  id: string;
  slug: string;
  name:string;
  price: number;
  description: string;
  imageUrls: string[];
  dataAiHint: string;
  status: 'Available' | 'Coming Soon';
  category: 'Tea' | 'Accessories';
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

export type SixPillar = {
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
}

export type GalleryAlbumImage = {
  url: string;
  dataAiHint: string;
};

export type GalleryAlbum = {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  coverImage: string;
  dataAiHintCover: string;
  images: GalleryAlbumImage[];
};

export const galleryCategories = [
  'All Stories',
  'Estate Events',
  'Tea Collection',
  'Collaborations',
  'Our History',
  'Sustainability',
];

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'album-1',
    title: 'The Annual Tea Harvest Festival',
    date: '2024-08-15',
    category: 'Estate Events',
    description: 'A celebration of our most bountiful harvest season, featuring traditional music, dance, and tea tasting ceremonies with the local community.',
    coverImage: 'https://placehold.co/600x750.png',
    dataAiHintCover: 'tea festival',
    images: [
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'people dancing' },
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'tea tasting' },
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'musicians playing' },
    ],
  },
  {
    id: 'album-2',
    title: 'Silver Tips: A Moonlight Harvest',
    date: '2024-07-20',
    category: 'Tea Collection',
    description: 'Documenting the rare and meticulous process of harvesting our Silver Tips White Tea under the light of the full moon.',
    coverImage: 'https://placehold.co/600x750.png',
    dataAiHintCover: 'tea leaves moon',
    images: [
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'tea leaves dark' },
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'workers harvesting night' },
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'tea buds closeup' },
    ],
  },
  {
    id: 'album-3',
    title: 'Collaboration with Artisan Potters',
    date: '2024-06-05',
    category: 'Collaborations',
    description: 'A partnership with local ceramic artists to create a unique line of teaware inspired by the natural beauty of our estate.',
    coverImage: 'https://placehold.co/600x750.png',
    dataAiHintCover: 'pottery teacup',
    images: [
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'potter working' },
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'ceramic teapots' },
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'artist sketching' },
    ],
  },
  {
    id: 'album-4',
    title: 'Reforestation Initiative Launch',
    date: '2024-04-22',
    category: 'Sustainability',
    description: 'Marking the launch of our commitment to reforesting 100 acres of land surrounding the Roba Ceylon Tea estate, enhancing biodiversity.',
    coverImage: 'https://placehold.co/600x750.png',
    dataAiHintCover: 'planting tree',
    images: [
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'group planting saplings' },
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'forest landscape' },
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'children watering plant' },
    ],
  },
  {
    id: 'album-5',
    title: 'Archiving Our Heritage',
    date: '2024-03-10',
    category: 'Our History',
    description: 'A look into the process of preserving our rich history, from vintage photographs to the original ledgers of our founder, Elias Roba.',
    coverImage: 'https://placehold.co/600x750.png',
    dataAiHintCover: 'old photographs',
    images: [
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'vintage photo factory' },
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'handwriting old letter' },
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'old map estate' },
    ],
  },
  {
    id: 'album-6',
    title: 'A New Generation of Tea Masters',
    date: '2024-02-18',
    category: 'Estate Events',
    description: 'Celebrating the graduation of our latest class of tea apprentices, who have completed their extensive training in the art of tea.',
    coverImage: 'https://placehold.co/600x750.png',
    dataAiHintCover: 'tea tasting group',
    images: [
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'people smiling' },
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'certificate ceremony' },
      { url: 'https://placehold.co/1200x800.png', dataAiHint: 'expert tea tasting' },
    ],
  },
];


export const sixPillars: SixPillar[] = [
  {
    title: 'The Estate',
    description: "Our estate is the heart of our operations, a place of extraordinary natural beauty and biodiversity. The unique microclimate and rich soil provide the perfect conditions for growing tea of the highest quality.",
    imageUrl: 'https://placehold.co/600x750.png',
    dataAiHint: 'tea estate house',
  },
  {
    title: 'Artisanal Craft',
    description: "We honor time-tested traditions of tea craftsmanship. Our leaves are meticulously hand-plucked and processed by skilled artisans who have perfected their craft over generations.",
    imageUrl: 'https://placehold.co/600x750.png',
    dataAiHint: 'tea processing',
  },
  {
    title: 'Exceptional Quality',
    description: 'From leaf to cup, our commitment to quality is unwavering. We meticulously grade and taste each batch to ensure a consistently exceptional experience.',
    imageUrl: 'https://placehold.co/600x750.png',
    dataAiHint: 'tea tasting',
  },
  {
    title: 'Sustainability',
    description: "We are committed to sustainable practices that protect our environment. From water conservation to organic farming, we strive to be responsible stewards of the land.",
    imageUrl: 'https://placehold.co/600x750.png',
    dataAiHint: 'nature conservation',
  },
  {
    title: 'Community',
    description: "We believe in nurturing the community that nurtures our tea. We are dedicated to fair labor practices and investing in the well-being of our estate families.",
    imageUrl: 'https://placehold.co/600x750.png',
    dataAiHint: 'community workers',
  },
  {
    title: 'The Perfect Cup',
    description: "Our ultimate goal is to deliver the perfect cup of tea. We provide guidance on brewing to help you unlock the full flavor and aroma of our exceptional leaves.",
    imageUrl: 'https://placehold.co/600x750.png',
    dataAiHint: 'cup of tea',
  },
];

export const teaCollections: TeaCollection[] = [
  {
    id: 'timeless-collections',
    title: 'Timeless Collections',
    description: 'An exquisite selection of our most cherished and enduring teas, celebrated for their consistent quality and classic character.',
    navImage: 'https://placehold.co/271x199.png',
    dataAiHintNav: 'classic tea',
    products: [
      { name: 'Heritage Black', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'black tea', status: 'Available' },
      { name: 'Golden Pekoe', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Ancient Green', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'green tea', status: 'Coming Soon' },
      { name: 'White Orchid', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'white tea', status: 'Unavailable' },
      { name: 'Spiced Chai', imageUrl: 'https://placehold.co/1224x800.png', dataAiHint: 'chai tea', status: 'Available' },
    ],
  },
  {
    id: 'classic-range',
    title: 'Classic Range',
    description: 'Our signature blends, time-tested and adored.',
    navImage: 'https://placehold.co/271x199.png',
    dataAiHintNav: 'tea plantation',
    products: [
      { name: 'Roba OP Grade', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Roba BOP1 Estate Reserve', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Roba Flowery Pekoe', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea leaves', status: 'Coming Soon' },
      { name: 'Silver Kandy', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'silver tea', status: 'Unavailable' },
      { name: 'Uva Highlands BOP', imageUrl: 'https://placehold.co/1224x800.png', dataAiHint: 'black tea leaves', status: 'Available' },
    ],
  },
  {
    id: 'limited-releases',
    title: 'Limited Releases',
    description: 'Rare selections harvested in micro-lots.',
    navImage: 'https://placehold.co/271x199.png',
    dataAiHintNav: 'rare tea',
    products: [
      { name: 'Roba Silver Tips (Moonlight Harvest)', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Highland Gold OP Select', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Roba Twilight BOP Reserve', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea leaves', status: 'Coming Soon' },
      { name: 'First Flush Darjeeling', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'darjeeling tea', status: 'Unavailable' },
      { name: 'Golden Monkey Paw', imageUrl: 'https://placehold.co/1224x800.png', dataAiHint: 'golden tea', status: 'Available' },
    ],
  },
  {
    id: 'travel-exclusive',
    title: 'Travel Exclusive',
    description: 'Curated packs for discerning global travellers.',
    navImage: 'https://placehold.co/271x199.png',
    dataAiHintNav: 'tea travel',
    products: [
      { name: 'Roba Voyager’s Pick', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Sunrise Trails OP Select', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea leaves', status: 'Available' },
      { name: 'Dusk Valley Highland Reserve', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea leaves', status: 'Coming Soon' },
      { name: 'Jetsetter\'s Green', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'green tea pack', status: 'Unavailable' },
      { name: 'Metropolis Black', imageUrl: 'https://placehold.co/1224x800.png', dataAiHint: 'black tea box', status: 'Available' },
    ],
  },
  {
    id: 'gifts-accessories',
    title: 'Gift & Accessories',
    description: 'Gifting-worthy blends and steeping essentials.',
    navImage: 'https://placehold.co/271x199.png',
    dataAiHintNav: 'tea gift',
    products: [
      { name: 'Roba Collectors Gift Set', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea gift set', status: 'Available' },
      { name: 'Steep & Sip Mug', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea mug', status: 'Available' },
      { name: 'Signature Roba Tray', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea tray', status: 'Coming Soon' },
      { name: 'Tea Infuser Ball', imageUrl: 'https://placehold.co/600x800.png', dataAiHint: 'tea infuser', status: 'Unavailable' },
      { name: 'Matcha Whisk Set', imageUrl: 'https://placehold.co/1224x800.png', dataAiHint: 'matcha set', status: 'Available' },
    ],
  },
];


export const experiences: ExperienceCard[] = [
  {
    category: 'Enjoy',
    title: 'Serves',
    imageUrl: 'https://placehold.co/600x600.png',
    dataAiHint: 'tea serving',
    link: '/store'
  },
  {
    category: 'Inside',
    title: 'The Roba Tea Society',
    imageUrl: 'https://placehold.co/600x600.png',
    dataAiHint: 'tea community people',
    link: '/our-story'
  },
  {
    category: 'Book',
    title: 'Estate Experiences',
    imageUrl: 'https://placehold.co/600x600.png',
    dataAiHint: 'tea estate landscape',
    link: '/our-story'
  },
  {
    category: 'Discover',
    title: 'Our Six Pillars',
    imageUrl: 'https://placehold.co/600x600.png',
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
    imageUrl: 'https://placehold.co/1800x800.png',
    dataAiHint: 'tea plantation'
  },
  {
    tag: 'Timeless',
    title: 'A Legacy of Unmatched Quality',
    buttonText: 'Read Our Story',
    buttonLink: '/our-story',
    imageUrl: 'https://placehold.co/1800x800.png',
    dataAiHint: 'tea ceremony'
  },
  {
    tag: 'Exquisite',
    title: 'Handpicked for Pure Perfection',
    buttonText: 'View Tea Varieties',
    buttonLink: '/tea-varieties',
    imageUrl: 'https://placehold.co/1800x800.png',
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
    imageUrls: ['https://placehold.co/800x640.png'],
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
    imageUrls: ['https://placehold.co/800x640.png'],
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
    imageUrls: ['https://placehold.co/800x640.png'],
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
    imageUrls: ['https://placehold.co/800x640.png'],
    dataAiHint: 'white tea',
    status: 'Coming Soon',
  }
];

export const products: Product[] = [
  {
    id: 'prod_001',
    slug: 'classic-ceylon-black-tin',
    name: 'Classic Ceylon Black Tin (100g)',
    price: 15.00,
    description: 'A beautiful tin containing 100g of our finest loose-leaf Classic Ceylon Black tea. A bold and robust classic, with notes of citrus and spice.',
    imageUrls: ['https://placehold.co/800x640.png', 'https://placehold.co/800x640.png', 'https://placehold.co/800x640.png'],
    dataAiHint: 'tea tin',
    status: 'Available',
    category: 'Tea',
  },
  {
    id: 'prod_002',
    slug: 'ceylon-earl-grey-sachets',
    name: 'Ceylon Earl Grey Sachets (20)',
    price: 12.00,
    description: '20 convenient, biodegradable tea sachets of our aromatic Ceylon Earl Grey. A bright and fragrant blend with a distinctive bergamot aroma.',
    imageUrls: ['https://placehold.co/800x640.png'],
    dataAiHint: 'tea box',
    status: 'Available',
    category: 'Tea',
  },
  {
    id: 'prod_003',
    slug: 'highland-green-loose-leaf',
    name: 'Highland Green Loose Leaf (80g)',
    price: 18.00,
    description: '80g of premium loose-leaf Highland Green tea, perfect for a refreshing cup. A delicate and refreshing green tea with a light, grassy flavor.',
    imageUrls: ['https://placehold.co/800x640.png'],
    dataAiHint: 'tea pouch',
    status: 'Coming Soon',
    category: 'Tea',
  },
  {
    id: 'prod_004',
    slug: 'silver-tips-white-tea-caddy',
    name: 'Silver Tips White Tea Caddy (50g)',
    price: 45.00,
    description: 'An exclusive 50g caddy of our rare and exquisite Silver Tips White Tea. An exquisite and rare tea with subtle notes of honey and melon.',
    imageUrls: ['https://placehold.co/800x640.png', 'https://placehold.co/800x640.png'],
    dataAiHint: 'luxury tea',
    status: 'Available',
    category: 'Tea',
  },
  {
    id: 'prod_005',
    slug: 'roba-tea-discovery-kit',
    name: 'Roba Tea Discovery Kit',
    price: 35.00,
    description: 'A selection of our four signature teas in sample sizes. The perfect gift for any tea lover.',
    imageUrls: ['https://placehold.co/800x640.png'],
    dataAiHint: 'tea gift',
    status: 'Available',
    category: 'Tea',
  },
    {
    id: 'prod_006',
    slug: 'artisan-tea-pot',
    name: 'Artisan Tea Pot',
    price: 55.00,
    description: 'A beautifully crafted ceramic teapot, designed for the perfect brew.',
    imageUrls: ['https://placehold.co/800x640.png', 'https://placehold.co/800x640.png'],
    dataAiHint: 'teapot',
    status: 'Coming Soon',
    category: 'Accessories',
  },
  {
    id: 'prod_007',
    slug: 'steep-and-sip-mug',
    name: 'Steep & Sip Mug',
    price: 25.00,
    description: 'An elegant glass mug designed for a complete tea-tasting experience.',
    imageUrls: ['https://placehold.co/800x640.png'],
    dataAiHint: 'glass mug',
    status: 'Available',
    category: 'Accessories'
  },
  {
    id: 'prod_008',
    slug: 'matcha-whisk-set',
    name: 'Matcha Whisk Set',
    price: 38.00,
    description: 'A complete set for preparing the perfect bowl of matcha, including a bamboo whisk and scoop.',
    imageUrls: ['https://placehold.co/800x640.png'],
    dataAiHint: 'matcha set',
    status: 'Available',
    category: 'Accessories'
  }
];

export type StoreHeroSlide = {
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  dataAiHint: string;
};

export const storeHeroSlides: StoreHeroSlide[] = [
  {
    tag: 'FEATURED TEA',
    title: 'Silver Tips White Tea Caddy (50g)',
    description: 'An exclusive 50g caddy of our rare and exquisite Silver Tips White Tea. An exquisite and rare tea with subtle notes of honey and melon.',
    buttonText: 'Discover Product',
    buttonLink: '/store/silver-tips-white-tea-caddy',
    imageUrl: 'https://placehold.co/1200x800.png',
    dataAiHint: 'luxury tea'
  },
  {
    tag: 'FEATURED ACCESSORY',
    title: 'Artisan Tea Pot',
    description: 'A beautifully crafted ceramic teapot, designed for the perfect brew.',
    buttonText: 'Discover Product',
    buttonLink: '/store/artisan-tea-pot',
    imageUrl: 'https://placehold.co/1200x800.png',
    dataAiHint: 'teapot'
  }
];
