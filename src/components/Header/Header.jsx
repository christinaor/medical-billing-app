import styles from './styles.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>MBA</h1>
      <h2 className={styles.subtitle}>Medical Billing Application</h2>
    </div>
  )
}