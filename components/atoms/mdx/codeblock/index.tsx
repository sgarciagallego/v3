import styles from './styles.module.css';

export default function CodeBlock(props: any) {
  return (
    <pre className={styles.properties} {...props} />
  );
}