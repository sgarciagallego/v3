'use client'

import styles from './styles.module.css';
import { usePathname } from 'next/navigation';
import Name from '@/components/atoms/name';
import Slogan from '@/components/atoms/slogan';
import Nav from '@/components/molecules/nav';

export default function Header() {
  const path = usePathname();

  return path === '/' ? (
    <header className={styles.home}>
      <Name />
      <Slogan />
      <Nav />
    </header>
  ) : <header className={styles.rest}><Nav /></header>;
}