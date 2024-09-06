'use client'

import styles from './styles.module.css';
import { usePathname } from 'next/navigation';
import Name from '@/components/atoms/name';
import Slogan from '@/components/atoms/slogan';
import Navigation from '@/components/molecules/navigation';
import SkipContent from '@/components/atoms/skipcontent';

export default function Header() {
  const path = usePathname();

  return path === '/' ? (
    <>
      <SkipContent />
      <header className={styles.properties}>
        <Name />
        <Slogan />
        <Navigation />
      </header>
    </>
  ) : (
    <>
      <SkipContent />
      <Navigation />
    </>
  );
}