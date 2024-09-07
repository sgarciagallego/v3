import styles from './styles.module.css';
import Link from 'next/link';
import { social } from '@/lib/social';
import { work } from '@/lib/constant';
import Image from 'next/image';

export default function Hyperlink(props: any) {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link
        className={styles.properties}
        {...props}
      />
    );
  }

  if (href.startsWith('#')) {
    return (
      <a
        className={styles.properties}
        {...props}
      />
    );
  }

  if (social.find(obj => obj.href === href)) {
    return (
      <a 
        target='_blank'
        rel='me noopener noreferrer'
        aria-label='opens in a new tab'
        className={`
          ${styles.properties}
          ${styles.social}
        `}
        {...props}
      >
        <span className={`
          ${styles.color}
          ${styles[
            social
              .find(obj => obj.href === href)?.name
              .toLowerCase() 
            || ''
          ]}
        `} />
        {props.children}
      </a>
    )
  }

  if (href === work.currentCompanyHref) {
    return (
      <a 
        target='_blank'
        rel='noopener noreferrer'
        aria-label='opens in a new tab'
        className={styles.label}
        {...props}
      >
        <Image 
          width={64}
          height={64}
          src='/ext/major.svg'
          alt='Major Digital favicon'
        />
        {props.children}
      </a>
    );
  }

  return (
    <a 
      target='_blank'
      rel='noopener noreferrer'
      aria-label='opens in a new tab'
      className={styles.properties}
      {...props}
    />
  );
}