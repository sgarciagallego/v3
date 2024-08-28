import styles from './styles.module.css';

export default function Subtitle(props: any) {
  return (
    <p 
      role='doc-subtitle'
      className={styles.properties}
      {...props}
    />
  );
}