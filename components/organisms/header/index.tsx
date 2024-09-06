'use client'

import styles from './styles.module.css';
import { usePathname } from 'next/navigation';
import Name from '@/components/atoms/name';
import Slogan from '@/components/atoms/slogan';
import Navigation from '@/components/molecules/navigation';

export default function Header() {
  const path = usePathname();

  return path === '/' ? (
    <header className={styles.properties}>
      <Name />
      <Slogan />
      <Navigation />
    </header>
  ) : <Navigation />;
}