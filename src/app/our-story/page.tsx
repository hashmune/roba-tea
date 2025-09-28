"use client";

import { Breadcrumb } from "@/components/shared/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { sixPillars, teaVarieties } from "@/lib/roba-website-data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function OurStoryPage() {
	const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Our Story" }];

	return (
		<div className="animate-in fade-in duration-500">
			<div className="container mx-auto px-4">
				<Breadcrumb items={breadcrumbItems} />
			</div>

			{/* Hero Section */}
			<section className="relative h-[60vh] w-full">
				<Image
					src="https://images.unsplash.com/photo-1522747776116-64ee03be1dad"
					data-ai-hint="tea leaves"
					alt="Lush tea estate in the highlands"
					fill
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 flex h-full items-end justify-start text-left text-white">
					<div className="container mx-auto px-4 pb-16 md:pb-24">
						<div className="max-w-2xl">
							<p className="mb-2 text-sm font-bold uppercase tracking-widest">
								ROBA CEYLON TEA ESTATE
							</p>
							<h1 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
								A Legacy of Perfection
							</h1>
						</div>
					</div>
				</div>
			</section>

			{/* Founded Section */}
			<section className="bg-background py-16 text-center md:py-24">
				<div className="container mx-auto max-w-2xl px-4">
					<p className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
						OUR STORY
					</p>
					<h2 className="mb-6 text-4xl font-bold font-headline text-foreground md:text-5xl">
						FOUNDED IN 2000
					</h2>
					<p className="text-lg text-muted-foreground">
						Roba tea, a premium brand introduced to the market by Adam’s view tea factory, a family
						business with over two decades of experience making the best Ceylon tea.
						<br />
						Our factory has been a sanctuary for the finest tea leaves nurtured by the unique
						climate of Sabaragamuwa Region of Sri Lanka.
					</p>
				</div>
			</section>

			{/* Our Founders Section */}
			<section className="bg-secondary/5 py-16 md:py-24">
				<div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
					<div className="text-left">
						<h2 className="mb-6 font-headline text-4xl font-bold text-foreground">
							A PIONEERING SPIRIT
						</h2>
						<p className="mb-4 text-muted-foreground">
							B.A.R Dissanayake, the man behind this legacy that has been passed down for two to
							three decades, has been an avid planter from his youth. In addition to his interest in
							agriculture, he intended to serve society by providing additional jobs to individuals
							in need. His passion and sweat, as well as excellent people management skills, enabled
							him to bring his goal to fruition by creating Adam's View Tea Factory and Estates
							across the country, providing work for 500 or so people.
							<br />
							<br />
							We currently auction tea and export it all over the world, and the second generation
							is taking over to create our tea brand "Roba" in order to conquer the world with the
							finest tea.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="relative aspect-[3/4]">
							<Image
								src="https://images.unsplash.com/photo-1522747776116-64ee03be1dad"
								data-ai-hint="tea leaves"
								alt="Vintage photo of the original tea factory"
								fill
								className="object-cover grayscale"
							/>
						</div>
						<div className="relative mt-12 aspect-[3/4]">
							<Image
								src="https://images.unsplash.com/photo-1522747776116-64ee03be1dad"
								data-ai-hint="tea leaves"
								alt="Vintage photo of tea workers on the estate"
								fill
								className="object-cover grayscale"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Six Pillars Section */}
			<section className="py-16 md:py-24 bg-background">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12 max-w-3xl mx-auto">
						<p className="text-sm font-bold uppercase text-muted-foreground mb-4">OUR PHILOSOPHY</p>
						<h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
							THE SIX PILLARS
						</h2>
						<p className="text-lg text-muted-foreground mt-4">
							Our commitment to excellence is guided by six fundamental principles. These pillars
							define our approach to tea making, from the nurturing of our estate to the final cup
							you enjoy.
						</p>
					</div>
					<Carousel
						opts={{
							align: "start",
							loop: false,
						}}
						className="w-full"
					>
						<CarouselContent>
							{sixPillars.map((pillar) => (
								<CarouselItem
									key={pillar.title}
									className="md:basis-1/2 lg:basis-1/3"
								>
									<div className="group p-4 h-full">
										<div className="relative aspect-[4/5] w-full overflow-hidden">
											<Image
												src={pillar.imageUrl}
												alt={pillar.title}
												data-ai-hint={pillar.dataAiHint}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-110"
											/>
										</div>
										<div className="pt-4 text-left">
											<h3 className="font-headline text-lg font-bold text-foreground uppercase tracking-wider">
												{pillar.title}
											</h3>
											<p className="text-muted-foreground mt-2 text-sm">{pillar.description}</p>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="flex justify-end mt-4">
							<div className="inline-flex items-center justify-center rounded-tl-[40px] rounded-tr-[12px] rounded-br-[40px] rounded-bl-[40px] border border-muted-foreground bg-background p-1">
								<CarouselPrevious
									variant="ghost"
									size="icon"
									className="static translate-y-0 border-none h-8 w-8 text-foreground/70 disabled:text-foreground/30 hover:text-foreground hover:bg-transparent"
								/>
								<CarouselNext
									variant="ghost"
									size="icon"
									className="static translate-y-0 border-none h-8 w-8 text-foreground/70 disabled:text-foreground/30 hover:text-foreground hover:bg-transparent"
								/>
							</div>
						</div>
					</Carousel>
				</div>
			</section>

			{/* Our Tea Garden Section */}
			<section className="bg-secondary/5 py-16 md:py-24">
				<div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
					<div className="grid grid-cols-2 gap-4">
						<div className="relative aspect-[3/4]">
							<Image
								src="https://images.unsplash.com/photo-1522747776116-64ee03be1dad"
								data-ai-hint="tea leaves"
								alt="Vintage photo of the original tea factory"
								fill
								className="object-cover grayscale"
							/>
						</div>
						<div className="relative mt-12 aspect-[3/4]">
							<Image
								src="https://images.unsplash.com/photo-1522747776116-64ee03be1dad"
								data-ai-hint="tea leaves"
								alt="Vintage photo of tea workers on the estate"
								fill
								className="object-cover grayscale"
							/>
						</div>
					</div>
					<div className="text-left">
						<h2 className="mb-6 font-headline text-4xl font-bold text-foreground uppercase">
							Our Tea Gardens
						</h2>
						<h3 className="text-lg font-bold text-foreground capitalize mb-2">
							Deniyaya Tea Garden
						</h3>
						<p className="mb-4 text-muted-foreground">
							Deniyaya tea plantation, which spans 30 acres of breathtaking tea bordering the
							Sinharaja, is well-known for its gorgeous surroundings and low-grown tea. The
							Sinharaja Forest Reserve is one of Sri Lanka's most famous low country rainforests and
							has been named a UNESCO Man and Biosphere Reserve and World Heritage site. Every
							month, we harvest between 20,000 and 25,000 kg of tea leaves from the Deniyaya Estate
							for manufacture. Our senior management constantly inspects the soil and tea leaf
							quality, and plantation knowledge is being passed down to the younger generation.
						</p>
					</div>
				</div>
			</section>

			{/* Our Signature Teas section */}
			<section className="py-16 md:py-24 bg-background">
				<div className="container mx-auto px-4">
					<Carousel
						opts={{
							align: "start",
							loop: false,
						}}
						className="w-full"
					>
						<CarouselContent>
							<CarouselItem className="md:basis-1/2 lg:basis-1/3">
								<div className="flex h-full flex-col justify-start p-4">
									<h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
										Our Signature Teas
									</h2>
									<p className="text-lg text-muted-foreground mt-2">
										Explore the teas that define our legacy. Each one is a testament to our Six
										Pillars and the unique character of our estate.
									</p>
									<div className="mt-8">
										<Button
											asChild
											variant="outline-dark"
											size="lg"
										>
											<Link href="/tea-varieties">Explore All Teas</Link>
										</Button>
									</div>
								</div>
							</CarouselItem>
							{teaVarieties.map((tea) => (
								<CarouselItem
									key={tea.slug}
									className="md:basis-1/2 lg:basis-1/3"
								>
									<div className="group p-4">
										<div className="relative aspect-[3/4] w-full overflow-hidden">
											<Image
												src={tea.imageUrls[0]}
												alt={tea.name}
												data-ai-hint={tea.dataAiHint}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-110"
											/>
										</div>
										<div className="pt-4">
											<div className="flex justify-between items-baseline gap-4">
												<h3 className="font-sans text-sm text-foreground uppercase">{tea.name}</h3>
												<Badge
													variant="outline"
													className={cn(
														"whitespace-nowrap",
														tea.status === "Available"
															? "text-accent border-accent"
															: "text-muted-foreground"
													)}
												>
													{tea.status.toUpperCase()}
												</Badge>
											</div>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="flex justify-end mt-4">
							<div className="inline-flex items-center justify-center rounded-tl-[40px] rounded-tr-[12px] rounded-br-[40px] rounded-bl-[40px] border border-muted-foreground bg-background p-1">
								<CarouselPrevious
									variant="ghost"
									size="icon"
									className="static translate-y-0 border-none h-8 w-8 text-foreground/70 disabled:text-foreground/30 hover:text-foreground hover:bg-transparent"
								/>
								<CarouselNext
									variant="ghost"
									size="icon"
									className="static translate-y-0 border-none h-8 w-8 text-foreground/70 disabled:text-foreground/30 hover:text-foreground hover:bg-transparent"
								/>
							</div>
						</div>
					</Carousel>
				</div>
			</section>

			{/* Final CTA */}
			<section className="relative h-[50vh] w-full bg-secondary/20">
				<Image
					src="https://images.unsplash.com/photo-1522747776116-64ee03be1dad"
					data-ai-hint="tea leaves"
					alt="Aerial view of the lush tea estate"
					fill
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 flex h-full items-end justify-start text-left text-white">
					<div className="container mx-auto px-4 pb-16 md:pb-24">
						<div className="max-w-2xl">
							<h2 className="mb-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
								Book An Estate Experience
							</h2>
							<Button
								asChild
								size="lg"
								variant="outline-light"
							>
								<Link href="/find-a-store">Explore</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
