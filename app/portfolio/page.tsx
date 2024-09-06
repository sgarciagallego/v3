import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constant';

export const metadata: Metadata = {
  title: `Portfolio`,
  description: 'Here you’ll find Sergio’s work with technology, where he steps closer each time to bridging the human-computer divide.',
  alternates: {
    canonical: `${siteConfig.url}/portfolio`,
  },
}

export default function PortfolioPage() {
  return (
    <>
      <header><h1>Portfolio</h1></header>
      <main id='skip-to-content'></main>
    </>
  );
}