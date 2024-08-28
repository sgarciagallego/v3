import styles from './styles.module.css';
import Img from '@/components/atoms/image';
import { counter } from '@/utils/counter';
import formatDate from '@/utils/formatDate';

export default function Meta({ 
  publishDate,
  words
}: { 
  publishDate: string 
  words: string
}) {
  return (
    <article className={styles.properties}>
      <Img 
        src='/avatar.jpeg'
        alt='Sergio’s avatar'
        width={64}
        height={64}
      />
      <div>
        <p rel='author'>Sergio Garcia Gallego</p>
        <p>
          <span>{counter(words)}</span>
          {' · '}
          <time dateTime={publishDate}>{formatDate(publishDate)}</time>
        </p>
      </div>
    </article>
  );
}