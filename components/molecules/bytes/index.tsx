import Img from '@/components/atoms/image';
import styles from './styles.module.css';
import { getBytes } from '@/app/db/bytes';
import List from '@/components/atoms/list';
import { CustomMDX } from '@/components/atoms/mdx';
import { formatTime } from '@/utils/formatDate';
import Hyperlink from '@/components/atoms/link';

export default function Bytes() {
  const bytes = getBytes();

  return (
    <main className={styles.properties}>
      <List type='ol' axis='vertical'>
        {bytes.map(byte => (
          <li key={byte.slug}>
            <blockquote>
              <CustomMDX source={byte.content} />
              <cite>
                <h2>Sergio</h2>
                <p>
                  <Hyperlink href='https://mastodon.social/@sergiogarciagallego'>@sergiogarciagallego</Hyperlink>
                  {' · '}
                  <time dateTime={byte.metadata.publishDate}>
                    {formatTime(byte.metadata.publishDate)}
                  </time>
                </p>
              </cite>
            </blockquote>
          </li>
        ))}
      </List>
    </main>
  );
}