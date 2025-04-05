import styles from './styles.module.css';
import { highlight } from 'sugar-high';

export default function CodeBlock({
  children,
}: {
  children: string;
}) {
  const code =
    typeof children === 'string' ? children : String(children);

  const html = highlight(code.trim());

  return (
    <pre className={styles.properties}>
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
}
