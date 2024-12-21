import styles from './styles.module.css';

export default function Figcaption({
  caption,
  location,
  device,
}: {
  caption: string;
  location: string;
  device: string;
}) {
  return (
    <figcaption className={styles.properties}>
      <p>{caption}</p>
      <p>
        {'@ '}
        {location}
      </p>
      <p>
        {'Shot on '}
        {device}
      </p>
    </figcaption>
  );
}
