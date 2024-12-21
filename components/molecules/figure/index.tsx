import styles from './styles.module.css';
import Img from '@/components/atoms/image';
import Figcaption from '@/components/atoms/figcaption';

export default function Figure({
  src,
  alt,
  caption,
  location,
  device,
}: {
  src: string;
  alt: string;
  caption: string;
  location: string;
  device: string;
}) {
  return (
    <figure className={styles.properties}>
      <Img src={src} alt={alt} />
      <Figcaption caption={caption} location={location} device={device} />
    </figure>
  );
}
