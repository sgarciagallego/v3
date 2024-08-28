import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constant';
import VerticalGrid from '@/components/templates/grid/vertical';
import Hyperlink from '@/components/atoms/link';
import PhotoGrid from '@/components/templates/grid/photo';
import carousel from '@/lib/carousel';
import Img from '@/components/atoms/image';
import Posts from '@/components/molecules/post';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: 'I’m Sergio, a design engineer based out of Bexhill-on-sea, East Sussex, and I love working with web technologies to bridge the human-computer divide.',
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function HomePage() {
  return (
    <VerticalGrid>
      <main>
        <p>I’m a frontend developer based out of Bexhill-on-sea, East Sussex. I currently work as a Design Engineer and Founder at <Hyperlink href='https://originblank.com'>Origin Blank</Hyperlink>, where I help businesses bridge the human-computer divide with <Hyperlink href='https://www.figma.com'>Figma</Hyperlink> and <Hyperlink href='https://react.dev'>React</Hyperlink> frameworks, namely <Hyperlink href='https://nextjs.org'>Next.js</Hyperlink>.</p>
        <PhotoGrid>
          {carousel.map((image, index) => (
            <Img 
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            />
          ))}
        </PhotoGrid>
      </main>
      <section>
        <p>With this personal site, comes a new chapter: I will be starting my long-awaited blogging journey! I won’t niche down, but you’ll notice that my content reflects my interests at the time.</p>
        <Posts trim />
      </section>
    </VerticalGrid>
  );
}