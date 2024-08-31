import styles from './styles.module.css';
import Img from '@/components/atoms/image';
import Figcaption from '@/components/atoms/figcaption';

export default function Figure({ src, alt, width, height, caption, location, device }: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  location: string;
  device: string;
}) {
  return (
    <figure className={styles.properties}>
      <Img 
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <Figcaption 
        caption={caption}
        location={location}
        device={device}
      />
    </figure>
  );
}