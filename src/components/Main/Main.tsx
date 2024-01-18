import styles from './Main.module.css';

type MainProps = {
  children: React.ReactNode
}

export function Main({ children }: MainProps) {
  return <main className={styles.main}>{children}</main>;
}