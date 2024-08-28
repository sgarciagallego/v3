import styles from './styles.module.css';

export default function List({ 
  type, 
  axis, 
  children 
}: {
  type: 'ul' | 'ol';
  axis: 'horizontal' | 'vertical';
  children: React.ReactNode;
}) {
  const Element = type;

  return (
    <Element className={`
      ${styles.properties}
      ${axis === 'horizontal' 
        ? styles.horizontal 
        : styles.vertical
      }
    `}>{children}</Element>
  );
}