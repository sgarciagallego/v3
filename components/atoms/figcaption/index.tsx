import styles from './styles.module.css';

export default function Figcaption({ excerpt, location, device }: {
  excerpt: string;
  location: string;
  device: string;
}) {
  return (
    <figcaption className={styles.properties}>
      <p>{excerpt}</p>
      <p>{'@ '}{location}</p>
      <p>{'Shot on '}{device}</p>
    </figcaption>
  )
}