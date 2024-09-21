import styles from './styles.module.css';

export default function Headline(props: any) {
  return <h1 className={styles.properties} {...props} />;
}
