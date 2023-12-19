import Link from 'next/link'
import styles from 'styles/logo.module.css'

function Test ({ boxOn = false }) {
  return (
    <ul>
      <li>
        <Link className={boxOn ? styles.box : styles.basic} href='/'>
          CUBE
        </Link>
      </li>
    </ul>
  )
}

export default Test
