export type TeaVariety = {
	slug: string;
	name: string;
	shortDescription: string;
	longDescription: string;
	origin: string;
	flavorProfile: string;
	brewingMethod: string;
	imageUrls: string[];
	dataAiHint: string;
	status: "Available" | "Coming Soon";
};

export type Product = {
	id: string;
	slug: string;
	name: string;
	price: number;
	description: string;
	imageUrls: string[];
	dataAiHint: string;
	status: "Available" | "Coming Soon";
	category: "Tea" | "Accessories";
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
	imageUrl2?: string;
	dataAiHint: string;
	status: "Available" | "Coming Soon" | "Unavailable";
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
};

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
	"All Stories",
	"Estate Events",
	"Tea Collection",
	"Collaborations",
	"Our History",
	"Sustainability",
];

export const galleryAlbums: GalleryAlbum[] = [
	{
		id: "album-1",
		title: "The Annual Tea Harvest Festival",
		date: "2024-08-15",
		category: "Estate Events",
		description:
			"A celebration of our most bountiful harvest season, featuring traditional music, dance, and tea tasting ceremonies with the local community.",
		coverImage: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
		dataAiHintCover: "tea leaves",
		images: [
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
		],
	},
	{
		id: "album-2",
		title: "Silver Tips: A Moonlight Harvest",
		date: "2024-07-20",
		category: "Tea Collection",
		description:
			"Documenting the rare and meticulous process of harvesting our Silver Tips White Tea under the light of the full moon.",
		coverImage: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
		dataAiHintCover: "tea leaves",
		images: [
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
		],
	},
	{
		id: "album-3",
		title: "Collaboration with Artisan Potters",
		date: "2024-06-05",
		category: "Collaborations",
		description:
			"A partnership with local ceramic artists to create a unique line of teaware inspired by the natural beauty of our estate.",
		coverImage: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
		dataAiHintCover: "tea leaves",
		images: [
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
		],
	},
	{
		id: "album-4",
		title: "Reforestation Initiative Launch",
		date: "2024-04-22",
		category: "Sustainability",
		description:
			"Marking the launch of our commitment to reforesting 100 acres of land surrounding the Roba Ceylon Tea estate, enhancing biodiversity.",
		coverImage: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
		dataAiHintCover: "tea leaves",
		images: [
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
		],
	},
	{
		id: "album-5",
		title: "Archiving Our Heritage",
		date: "2024-03-10",
		category: "Our History",
		description:
			"A look into the process of preserving our rich history, from vintage photographs to the original ledgers of our founder, Elias Roba.",
		coverImage: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
		dataAiHintCover: "tea leaves",
		images: [
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
		],
	},
	{
		id: "album-6",
		title: "A New Generation of Tea Masters",
		date: "2024-02-18",
		category: "Estate Events",
		description:
			"Celebrating the graduation of our latest class of tea apprentices, who have completed their extensive training in the art of tea.",
		coverImage: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
		dataAiHintCover: "tea leaves",
		images: [
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
			{
				url: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
				dataAiHint: "tea leaves",
			},
		],
	},
];

export const sixPillars: SixPillar[] = [
	{
		title: "Tea Gardens",
		description:
			"Our tea gardens are the heart of our operations. The unique microclimate and rich soil provide the perfect conditions for growing tea of the highest quality.",
		imageUrl: "/images/pillars_1.png",
		dataAiHint: "tea leaves",
	},
	{
		title: "Artisanal Craft",
		description:
			"We honor time-tested traditions of tea craftsmanship. Our leaves are meticulously hand-plucked and processed by skilled artisans who have perfected their craft over generations.",
		imageUrl: "/images/pillars_2.png",
		dataAiHint: "tea leaves",
	},
	{
		title: "Exceptional Quality",
		description:
			"From leaf to cup, our commitment to quality is unwavering. We meticulously grade and taste each batch to ensure a consistently exceptional experience.",
		imageUrl: "/images/pillars_3.png",
		dataAiHint: "tea leaves",
	},
	{
		title: "Sustainability",
		description:
			"We are committed to sustainable practices that protect our environment. From water conservation to organic farming, we strive to be responsible stewards of the land.",
		imageUrl: "/images/pillars_4.png",
		dataAiHint: "tea leaves",
	},
	{
		title: "Community",
		description:
			"We believe in nurturing the community that nurtures our tea. We are dedicated to fair labor practices and investing in the well-being of our estate families.",
		imageUrl: "/images/pillars_5.png",
		dataAiHint: "tea leaves",
	},
];

export const teaCollections: TeaCollection[] = [
	{
		id: "english-breakfast",
		title: "Roba's English Breakfast",
		description:
			"Roba's English Breakfast Tea is more than just a morning ritual — it's a bold, flavorful experience. Crafted from a unique blend of our finest low-country teas and the rich, aromatic leaves of the upcountry, this premium combination delivers the perfect balance of strength and smoothness. Known for its full-bodied character and robust flavor, English Breakfast Tea is a classic favorite.",
		navImage: "/images/english_breakfast.png",
		dataAiHintNav: "english breakfast tea",
		products: [
			{
				name: "Roba's English Breakfast",
				imageUrl: "/images/english_breakfast.png",
				imageUrl2: "/images/english_breakfast.png",
				dataAiHint: "english breakfast tea",
				status: "Available",
			},
		],
	},
	{
		id: "opa",
		title: "Roba's OPA",
		description:
			"Roba's Refreshing OPA Tea is a single-origin masterpiece, made from carefully selected, top quality tea leaves. Light, smooth, and full of character, this tea offers a perfectly balanced flavor that lifts your mood and recharges your energy whether it's morning, noon, or night. Every sip is a clean, refreshing experience.",
		navImage: "/images/opa.png",
		dataAiHintNav: "opa tea",
		products: [
			{
				name: "Roba's OPA",
				imageUrl: "/images/opa.png",
				imageUrl2: "/images/opa.png",
				dataAiHint: "opa tea",
				status: "Available",
			},
		],
	},
	{
		id: "pekoe",
		title: "Roba's Pekoe",
		description:
			"Roba's Pekoe is not just a tea it's a quiet symphony of Sri Lanka's soil and soul. From the hands of master artisans at Adam's View, its delicately curled leaves unfurl into a golden-reddish glow, offering a whisper of amber and a taste of timeless tradition.",
		navImage: "/images/pekoe.png",
		dataAiHintNav: "pekoe tea",
		products: [
			{
				name: "Roba's Pekoe",
				imageUrl: "/images/pekoe.png",
				imageUrl2: "/images/pekoe.png",
				dataAiHint: "pekoe tea",
				status: "Available",
			},
		],
	},
	{
		id: "broken-orange",
		title: "Roba's Broken Orange",
		description:
			"Roba's Broken Orange Pekoe Tea is strong, bold, and seriously flavorful. It is a single origin tea that brews into a rich reddish color cup and packs a punch with its sharp taste. It's full-bodied and super satisfying, perfect if you like your tea with a bit more kick. One sip, and you'll know this isn't your average cup of tea",
		navImage: "/images/broken_orange.png",
		dataAiHintNav: "broken orange tea",
		products: [
			{
				name: "Roba's Broken Orange",
				imageUrl: "/images/broken_orange.png",
				imageUrl2: "/images/broken_orange.png",
				dataAiHint: "broken orange tea",
				status: "Available",
			},
		],
	},
	{
		id: "green-tea",
		title: "Roba's Green Tea",
		description:
			"Produced at the serene Park Tea Factory in Kandapola, this mellow, soothing infusion is crafted from the finest Ceylon leaves. Its gentle character and refreshing aroma bring a sense of calm and clarity, making it the perfect companion at any time of the day. Experience the tranquil elegance of true Ceylon Green Tea in every sip.",
		navImage: "/images/green_tea.png",
		dataAiHintNav: "green tea",
		products: [
			{
				name: "Roba's Green Tea",
				imageUrl: "/images/green_tea.png",
				imageUrl2: "/images/green_tea.png",
				dataAiHint: "green tea",
				status: "Available",
			},
		],
	},
	{
		id: "legacy-brew",
		title: "Roba's Legacy Brew",
		description:
			"Crafted at the renowned Adams View Tea Factory, Legacy Brew captures the bold spirit of Sabaragamuwa. Its rich, brisk cup carries the signature astringency unique to the region a true mark of heritage and mastery. A timeless Ceylon tea that delivers strength, character, and an unforgettable legacy in every sip.",
		navImage: "/images/legacy_brew.png",
		dataAiHintNav: "legacy brew tea",
		products: [
			{
				name: "Roba's Legacy Brew",
				imageUrl: "/images/legacy_brew.png",
				imageUrl2: "/images/legacy_brew.png",
				dataAiHint: "legacy brew tea",
				status: "Available",
			},
		],
	},
	{
		id: "luxury-redefined",
		title: "Roba's Luxury Redefined",
		description:
			"Luxury redefined tea is a lavish product with Roba's FBOP tea which has a bold and beautifully balanced blend, crafted from broken tea leaves mixed with delicate golden tips. This tea brews into a rich, coppery liquor with a smooth yet robust flavor profile - perfect for those who enjoy a cup that's both strong and refined. With its subtle floral notes and full-bodied character, Roba's FBOP delivers a satisfying experience from the very first sip. Ideal with or without milk, it's a timeless favorite for true tea lovers.",
		navImage: "/images/luxury_redefined.png",
		dataAiHintNav: "luxury redefined tea",
		products: [
			{
				name: "Roba's Luxury Redefined",
				imageUrl: "/images/luxury_redefined.png",
				imageUrl2: "/images/luxury_redefined.png",
				dataAiHint: "luxury redefined tea",
				status: "Available",
			},
		],
	},
];

export const experiences: ExperienceCard[] = [
	{
		category: "Enjoy",
		title: "Luxury in every sip",
		imageUrl: "/images/experience_roba/enjoy.png",
		dataAiHint: "tea variety",
		link: "/tea-varieties",
	},
	{
		category: "Inside",
		title: "The Roba Tea Society",
		imageUrl: "/images/experience_roba/society.png",
		dataAiHint: "tea society",
		link: "/our-story",
	},
	{
		category: "Legacy",
		title: "20 years of perfection",
		imageUrl: "/images/experience_roba/perfection.png",
		dataAiHint: "20 years of perfection",
		link: "/our-story",
	},
	{
		category: "Discover",
		title: "Our Six Pillars",
		imageUrl: "/images/experience_roba/pillars.png",
		dataAiHint: "six pillars",
		link: "/our-story",
	},
];

export const heroSlides: HeroSlide[] = [
	{
		tag: "Discover",
		title: "The Soul of Ceylon, in a Cup",
		buttonText: "Explore Our Teas",
		buttonLink: "/store",
		imageUrl: "/images/soul_of_ceylon.png",
		dataAiHint: "tea plantation",
	},
	{
		tag: "Timeless",
		title: "A Legacy of Unmatched Quality",
		buttonText: "Read Our Story",
		buttonLink: "/our-story",
		imageUrl: "/images/legacy_unmatched.png",
		dataAiHint: "tea ceremony",
	},
	{
		tag: "Exquisite",
		title: "Handpicked for Pure Perfection",
		buttonText: "View Tea Varieties",
		buttonLink: "/tea-varieties",
		imageUrl: "/images/hand_picked.png",
		dataAiHint: "tea leaves closeup",
	},
];

export const teaVarieties: TeaVariety[] = [
	{
		slug: "english-breakfast",
		name: "Roba's English Breakfast",
		shortDescription: "Bold, Bright and brewed to perfection",
		longDescription:
			"Roba's English Breakfast Tea is more than just a morning ritual — it's a bold, flavorful experience. Crafted from a unique blend of our finest low-country teas and the rich, aromatic leaves of the upcountry, this premium combination delivers the perfect balance of strength and smoothness. Known for its full-bodied character and robust flavor, English Breakfast Tea is a classic favorite.",
		origin: "Deniyaya, Sri Lanka",
		flavorProfile: "Bold, Bright",
		brewingMethod: "Brewing time: 3-5 minutes | Water temperature: 100°C",
		imageUrls: ["/images/english_breakfast.png"],
		dataAiHint: "english breakfast tea",
		status: "Available",
	},
	{
		slug: "opa",
		name: "Roba's OPA",
		shortDescription: "Pure bliss in every gold sip",
		longDescription:
			"Roba's Refreshing OPA Tea is a single-origin masterpiece, made from carefully selected, top quality tea leaves. Light, smooth, and full of character, this tea offers a perfectly balanced flavor that lifts your mood and recharges your energy whether it's morning, noon, or night. Every sip is a clean, refreshing experience.",
		origin: "Deniyaya, Sri Lanka",
		flavorProfile: "Light, Smooth, Refreshing",
		brewingMethod: "Brewing time: 3-5 minutes | Water temperature: 100°C",
		imageUrls: ["/images/opa.png"],
		dataAiHint: "opa tea",
		status: "Available",
	},
	{
		slug: "pekoe",
		name: "Roba's Pekoe",
		shortDescription: "Pure bliss in every gold sip",
		longDescription:
			"Roba's Pekoe is not just a tea it's a quiet symphony of Sri Lanka's soil and soul. From the hands of master artisans at Adam's View, its delicately curled leaves unfurl into a golden-reddish glow, offering a whisper of amber and a taste of timeless tradition.",
		origin: "Deniyaya, Sri Lanka",
		flavorProfile: "Amber & Timeless",
		brewingMethod: "Brewing time: 3-5 minutes | Water temperature: 100°C",
		imageUrls: ["/images/pekoe.png"],
		dataAiHint: "pekoe tea",
		status: "Available",
	},
	{
		slug: "broken-orange",
		name: "Roba's Broken Orange",
		shortDescription: "Small leaves & mighty moments",
		longDescription:
			"Roba's Broken Orange Pekoe Tea is strong, bold, and seriously flavorful. It is a single origin tea that brews into a rich reddish color cup and packs a punch with its sharp taste. It's full-bodied and super satisfying, perfect if you like your tea with a bit more kick. One sip, and you'll know this isn't your average cup of tea",
		origin: "Deniyaya, Sri Lanka",
		flavorProfile: "Strong, Bold, Flavorful",
		brewingMethod: "Brewing time: 3-5 minutes | Water temperature: 100°C",
		imageUrls: ["/images/broken_orange.png"],
		dataAiHint: "broken orange tea",
		status: "Available",
	},
	{
		slug: "green-tea",
		name: "Roba's Green Tea",
		shortDescription: "Small leaves & mighty moments",
		longDescription:
			"Produced at the serene Park Tea Factory in Kandapola, this mellow, soothing infusion is crafted from the finest Ceylon leaves. Its gentle character and refreshing aroma bring a sense of calm and clarity, making it the perfect companion at any time of the day. Experience the tranquil elegance of true Ceylon Green Tea in every sip.",
		origin: "Kandapola, Sri Lanka",
		flavorProfile: "Mellow, Soothing, Refreshing",
		brewingMethod: "Brewing time: 3-5 minutes | Water temperature: 100°C",
		imageUrls: ["/images/green_tea.png"],
		dataAiHint: "green tea",
		status: "Available",
	},
	{
		slug: "legacy-brew",
		name: "Roba's Legacy Brew",
		shortDescription: "Unforgettable legacy, in every sip",
		longDescription:
			"Crafted at the renowned Adams View Tea Factory, Legacy Brew captures the bold spirit of Sabaragamuwa. Its rich, brisk cup carries the signature astringency unique to the region a true mark of heritage and mastery. A timeless Ceylon tea that delivers strength, character, and an unforgettable legacy in every sip.",
		origin: "Sabaragamuwa, Sri Lanka",
		flavorProfile: "Rich, Brisk, Astringent",
		brewingMethod: "Brewing time: 3-5 minutes | Water temperature: 100°C",
		imageUrls: ["/images/legacy_brew.png"],
		dataAiHint: "legacy brew tea",
		status: "Available",
	},
	{
		slug: "luxury-redefined",
		name: "Roba's Luxury Redefined",
		shortDescription: "A prestige you can pour.",
		longDescription:
			"Luxury redefined tea is a lavish product with Roba's FBOP tea which has a bold and beautifully balanced blend, crafted from broken tea leaves mixed with delicate golden tips. This tea brews into a rich, coppery liquor with a smooth yet robust flavor profile - perfect for those who enjoy a cup that's both strong and refined. With its subtle floral notes and full-bodied character, Roba’s FBOP delivers a satisfying experience from the very first sip. Ideal with or without milk, it's a timeless favorite for true tea lovers.",
		origin: "Deniyaya, Sri Lanka",
		flavorProfile: "Bold, Beautifully Balanced",
		brewingMethod: "Brewing time: 3-5 minutes | Water temperature: 100°C",
		imageUrls: ["/images/luxury_redefined.png"],
		dataAiHint: "luxury redefined tea",
		status: "Available",
	},
];

export const products: Product[] = [
	{
		id: "prod_001",
		slug: "classic-ceylon-black-tin",
		name: "Classic Ceylon Black Tin (100g)",
		price: 15.0,
		description:
			"A beautiful tin containing 100g of our finest loose-leaf Classic Ceylon Black tea. A bold and robust classic, with notes of citrus and spice.",
		imageUrls: [
			"https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
			"https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
			"https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
		],
		dataAiHint: "tea leaves",
		status: "Available",
		category: "Tea",
	},
	{
		id: "prod_002",
		slug: "ceylon-earl-grey-sachets",
		name: "Ceylon Earl Grey Sachets (20)",
		price: 12.0,
		description:
			"20 convenient, biodegradable tea sachets of our aromatic Ceylon Earl Grey. A bright and fragrant blend with a distinctive bergamot aroma.",
		imageUrls: ["https://images.unsplash.com/photo-1522747776116-64ee03be1dad"],
		dataAiHint: "tea leaves",
		status: "Available",
		category: "Tea",
	},
	{
		id: "prod_003",
		slug: "highland-green-loose-leaf",
		name: "Highland Green Loose Leaf (80g)",
		price: 18.0,
		description:
			"80g of premium loose-leaf Highland Green tea, perfect for a refreshing cup. A delicate and refreshing green tea with a light, grassy flavor.",
		imageUrls: ["https://images.unsplash.com/photo-1522747776116-64ee03be1dad"],
		dataAiHint: "tea leaves",
		status: "Coming Soon",
		category: "Tea",
	},
	{
		id: "prod_004",
		slug: "silver-tips-white-tea-caddy",
		name: "Silver Tips White Tea Caddy (50g)",
		price: 45.0,
		description:
			"An exclusive 50g caddy of our rare and exquisite Silver Tips White Tea. An exquisite and rare tea with subtle notes of honey and melon.",
		imageUrls: [
			"https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
			"https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
		],
		dataAiHint: "tea leaves",
		status: "Available",
		category: "Tea",
	},
	{
		id: "prod_005",
		slug: "roba-tea-discovery-kit",
		name: "Roba Tea Discovery Kit",
		price: 35.0,
		description:
			"A selection of our four signature teas in sample sizes. The perfect gift for any tea lover.",
		imageUrls: ["https://images.unsplash.com/photo-1522747776116-64ee03be1dad"],
		dataAiHint: "tea leaves",
		status: "Available",
		category: "Tea",
	},
	{
		id: "prod_006",
		slug: "artisan-tea-pot",
		name: "Artisan Tea Pot",
		price: 55.0,
		description: "A beautifully crafted ceramic teapot, designed for the perfect brew.",
		imageUrls: [
			"https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
			"https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
		],
		dataAiHint: "tea leaves",
		status: "Coming Soon",
		category: "Accessories",
	},
	{
		id: "prod_007",
		slug: "steep-and-sip-mug",
		name: "Steep & Sip Mug",
		price: 25.0,
		description: "An elegant glass mug designed for a complete tea-tasting experience.",
		imageUrls: ["https://images.unsplash.com/photo-1522747776116-64ee03be1dad"],
		dataAiHint: "tea leaves",
		status: "Available",
		category: "Accessories",
	},
	{
		id: "prod_008",
		slug: "matcha-whisk-set",
		name: "Matcha Whisk Set",
		price: 38.0,
		description:
			"A complete set for preparing the perfect bowl of matcha, including a bamboo whisk and scoop.",
		imageUrls: ["https://images.unsplash.com/photo-1522747776116-64ee03be1dad"],
		dataAiHint: "tea leaves",
		status: "Available",
		category: "Accessories",
	},
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
		tag: "FEATURED TEA",
		title: "Silver Tips White Tea Caddy (50g)",
		description:
			"An exclusive 50g caddy of our rare and exquisite Silver Tips White Tea. An exquisite and rare tea with subtle notes of honey and melon.",
		buttonText: "Discover Product",
		buttonLink: "/store/silver-tips-white-tea-caddy",
		imageUrl: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
		dataAiHint: "tea leaves",
	},
	{
		tag: "FEATURED ACCESSORY",
		title: "Artisan Tea Pot",
		description: "A beautifully crafted ceramic teapot, designed for the perfect brew.",
		buttonText: "Discover Product",
		buttonLink: "/store/artisan-tea-pot",
		imageUrl: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad",
		dataAiHint: "tea leaves",
	},
];
