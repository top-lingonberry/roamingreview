import styles from './styles/NavigationMenu.module.css'

const NavigationMenu = () => {
  
  return (
    <nav className={`${styles.navContainer}`}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a className={styles.navLink} href='/about'>About</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href='/posts'>Posts</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href='/contact'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationMenu