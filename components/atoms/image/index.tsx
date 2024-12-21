import styles from './styles.module.css';
import Image, { ImageProps } from 'next/image';
import path from 'path';
import sharp from 'sharp';

interface ImgProps extends Omit<ImageProps, 'width' | 'height'> {
  src: string;
  alt: string;
}

async function getImageMetadata(src: string) {
  const imagePath = path.join(process.cwd(), 'public', src);
  const sharpImage = sharp(imagePath);
  const metadata = await sharpImage.metadata();
  const placeholder = await sharpImage.resize(10).toBuffer();
  const base64 = placeholder.toString('base64');
  const blurDataURL = `data:image/png;base64,${base64}`;

  return {
    width: metadata.width,
    height: metadata.height,
    blurDataURL,
  };
}

export default async function Img(props: ImgProps) {
  const { src, alt, ...rest } = props;

  const { width, height, blurDataURL } = await getImageMetadata(src);

  return (
    <Image
      {...rest}
      src={src}
      quality={100}
      alt={alt || ''}
      placeholder="blur"
      blurDataURL={blurDataURL}
      width={width}
      height={height}
      className={styles.properties}
    />
  );
}
