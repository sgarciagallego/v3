import styles from './styles.module.css';
import List from '@/components/atoms/list';
import { social } from '@/lib/social';
import Hyperlink from '@/components/atoms/link';

export default function Footer() {
  return (
    <footer className={styles.properties}>
      <List 
        type='ul'
        axis='horizontal'
      >
        {social.map(obj => (
          <li key={obj.name.toLowerCase()}>
            <Hyperlink href={obj.href}>
              {obj.name}
            </Hyperlink>
          </li>
        ))}
      </List>
    </footer>
  );
}