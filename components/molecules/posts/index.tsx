import styles from './styles.module.css';
import { getPosts } from '@/app/db/blog';
import List from '@/components/atoms/list';
import Hyperlink from '@/components/atoms/link';
import counter from '@/utils/counter';
import formatDate from '@/utils/formatDate';

export default function Posts({ trim }: { trim?: boolean }) {
  const posts = getPosts();
  const Element = trim ? 'div' : 'main'

  return (
    <Element 
      id={trim ? undefined : 'skip-to-content'}
      className={styles.properties}
    >
      <List type='ol' axis='vertical'>
        {posts
          .sort((a, b) => new Date(b.metadata.publishDate).getTime() - new Date(a.metadata.publishDate).getTime())
          .slice(0, trim ? 4 : undefined)
          .map((post) => (
            <li key={post.slug}>
              <Hyperlink href={`/blog/${post.slug}`}>
                <h2>{post.metadata.title}</h2>
                <p>
                  <span>{counter(post.content)}</span>
                  {' · '}
                  <time dateTime={post.metadata.publishDate}>
                    {formatDate(post.metadata.publishDate)}
                  </time>
                </p>
              </Hyperlink>
            </li>
          )
        )}
      </List>
      {(trim && posts.length >= 4) && (
        <Hyperlink href='/blog'>View all</Hyperlink>
      )}
    </Element>
  );
}