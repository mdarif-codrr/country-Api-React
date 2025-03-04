import { Link } from 'react-router'
import styles from './css/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.artist}>
        Made With ❤️ by{' '}
        <Link className={styles.ancher} to="https://www.instagram.com/iam_mdarifg?igsh=MXJmejM0YndwM3MwbQ==">
          Md Arif
        </Link>{' '}
      </p>
    </footer>
  )
}
