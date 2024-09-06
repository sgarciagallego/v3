import styles from './styles.module.css';

export default function Spacer({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.properties}>{children}</main>
  )
}
