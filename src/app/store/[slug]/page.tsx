import { notFound } from 'next/navigation';
import { products } from '@/lib/roba-website-data';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    notFound();
  }
  return <ProductDetailClient product={product} />;
}
