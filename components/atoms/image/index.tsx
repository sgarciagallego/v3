import styles from './styles.module.css';
import Image, { ImageProps } from 'next/image';
import path from 'path';
import sharp from 'sharp';

interface ImgProps extends ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default async function Img(props: ImgProps) {
  const imagePath = path.join(process.cwd(), 'public', props.src);
  const sharpImage = sharp(imagePath);
  const metadata = await sharpImage.metadata();

  const width = metadata.width ?? props.width;
  const height = metadata.height ?? props.height;

  const placeholder = await sharpImage.resize(10).toBuffer();
  const base64 = placeholder.toString('base64');
  const blurDataURL = `data:image/png;base64,${base64}`;

  return (
    <Image
      {...props}
      quality={100}
      alt={props.alt || ''}
      placeholder="blur"
      blurDataURL={blurDataURL}
      width={width}
      height={height}
      className={styles.properties}
    />
  );
}
