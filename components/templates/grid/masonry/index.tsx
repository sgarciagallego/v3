import styles from './styles.module.css';

export default function Masonry({
  element: Component = 'div',
  children,
}: {
  element?: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <Component className={`width-fill ${styles.properties}`}>
      {children}
    </Component>
  );
}
