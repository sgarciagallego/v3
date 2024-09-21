import styles from './styles.module.css';
import slugify from '@/utils/slugify';
import React from 'react';

export default function createHeading(level: number) {
  return ({ children }: { children: string }) => {
    const slug = slugify(children);

    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className: styles.properties,
      },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          'aria-label': `anchor link for ${children.toLowerCase()}`,
        }),
      ],
      children
    );
  };
}
