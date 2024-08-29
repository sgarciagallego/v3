import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constant';
import Bytes from '@/components/molecules/bytes';

export const metadata: Metadata = {
  title: 'Bytes',
  description: 'An attempt at keeping my constant rush of thoughts at bay, through byte-sized brain dumps.',
  alternates: {
    canonical: `${siteConfig.url}/bytes`,
  },
}

export default function BytePage() {
  return (
    <>
      <section><h1>Bytes</h1></section>
      <Bytes />
    </>
  );
}