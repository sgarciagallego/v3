import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constant';
import Masonry from '@/components/templates/grid/masonry';
import album from '@/lib/album';
import Figure from '@/components/molecules/figure';

export const metadata: Metadata = {
  title: 'Album',
  description:
    'Explore a curated collection of photos captured by Sergio, a hobbyist photographer and professional web developer.',
  alternates: {
    canonical: `${siteConfig.url}/album`,
  },
};

export default function AlbumPage() {
  return (
    <>
      <header>
        <h1>Album</h1>
        <p>{metadata.description}</p>
      </header>
      <hr />
      <Masonry element="main">
        {album
          .sort(() => Math.random() - 0.5)
          .map((photo, index) => (
            <Figure
              key={index}
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              location={photo.location ?? 'Somewhere'}
              device={photo.device}
            />
          ))}
      </Masonry>
    </>
  );
}
