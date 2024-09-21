import { Bricolage_Grotesque } from 'next/font/google';
import localFont from 'next/font/local';

export const heading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  fallback: [
    'system-ui',
    '-apple-system',
    'Open Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
  variable: '--heading',
});

export const mono = localFont({
  src: [
    {
      path: './mono/500.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './mono/500.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: ['Courier New', 'Courier', 'monospace'],
  variable: '--mono',
});

export const sans = localFont({
  src: [
    {
      path: './sans/roman/400.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './sans/roman/400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './sans/italic/400.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './sans/italic/400.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './sans/roman/500.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './sans/roman/500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './sans/italic/500.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './sans/italic/500.woff2',
      weight: '500',
      style: 'italic',
    },
  ],
  display: 'swap',
  fallback: [
    'system-ui',
    '-apple-system',
    'Open Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
  variable: '--sans',
});
