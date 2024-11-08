'use client';

import styles from './styles.module.css';
import { useSearchParams } from 'next/navigation';

export default function Prompt({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  if (error) {
    return <p className={`${styles.properties} ${styles.error}`}>{children}</p>;
  }
}
