import styles from './styles.module.css';

export default function PostSkeleton() {
  return (
    <div className={styles.properties}>
      <div><div></div></div>
      <div><div></div></div>
      <div>
        <div></div>
        <div>
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </div>
      <div>
        {[...Array(12)].map((_, i) => (
          <div key={i}><div></div></div>
        ))}
      </div>
    </div>
  );
}