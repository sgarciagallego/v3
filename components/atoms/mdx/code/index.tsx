import styles from './styles.module.css'
import { highlight } from 'sugar-high';

export default function Code({ children, ...props }: { children: string }) {
  const codeHTML = highlight(children);

  return (
    <code 
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      className={styles.properties}
      {...props} />
    );
}