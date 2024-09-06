import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constant';
import Hyperlink from '@/components/atoms/link';

export const metadata: Metadata = {
  title: `Colophon`,
  description: 'The blueprint for this website including typeset, technologies and credits. Take what you please and happy building!',
  alternates: {
    canonical: `${siteConfig.url}/colophon`,
  },
}

export default function ColophonPage() {
  return (
    <>
      <header>
        <h1>Mi casa es tu casa</h1>
      </header>
      <main id='skip-to-content'>
        <ul>
          <li>Typeset in Bricolage Grotesque, Wotfard and Geist Mono.</li>
          <li>Built with TypeScript using Next.js.</li>
          <li>Designed on Figma. Inspired by <Hyperlink href='https://leerob.io'>Lee Robinson</Hyperlink> and <Hyperlink href='https://www.alexchantastic.com'>Alex Chan</Hyperlink>.</li>
        </ul>
      </main>
    </>
  );
}