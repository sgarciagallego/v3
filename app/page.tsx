import type { Metadata } from 'next';
import { siteConfig, work } from '@/lib/constant';
import Spacer from '@/components/templates/grid/spacer';
import Hyperlink from '@/components/atoms/link';
import PhotoGrid from '@/components/templates/grid/photo';
import carousel from '@/lib/carousel';
import Img from '@/components/atoms/image';
import Posts from '@/components/molecules/posts';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: 'I’m Sergio, a design engineer based out of Bexhill-on-sea, East Sussex, and I love working with web technologies to bridge the human-computer divide.',
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function HomePage() {
  return (
    <Spacer>
      <section>
        <p>I’m a frontend developer based out of Bexhill-on-sea, East Sussex. I currently work as a {work.currentRole} at <Hyperlink href={work.currentCompanyHref}>{work.currentCompany}</Hyperlink>, where I create experiences designed to scale with <Hyperlink href='https://jamstack.org/'>Jamstack architecture</Hyperlink>, and help businesses bridge the human-computer divide with their people.</p>
      </section>
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
      <section>
        <p>With this personal site, comes a new chapter: I will be starting my long-awaited blogging journey! I won’t niche down, but you’ll notice that my content reflects my interests at the time.</p>
        <Posts trim />
      </section>
    </Spacer>
  );
}