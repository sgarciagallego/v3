import styles from './styles.module.css';

export default function Masonry({ 
  element: Element = 'div',
  children,
}: { 
  element?: keyof JSX.IntrinsicElements; 
  children: React.ReactNode;
}) {
  return (
    <Element className={`width-fill ${styles.properties}`}>
      {children}
    </Element>
  );
}