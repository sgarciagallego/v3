import styles from './styles.module.css';
import Link from 'next/link';

export default function SkipContent() {
  return (
    <Link 
      href={'#skip-to-content'}
      className={styles.properties}
    >Skip to content</Link>
  );
}