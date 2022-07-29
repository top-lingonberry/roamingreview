import Image from 'next/image'
import { useState } from 'react'
import logoImage from '../public/android-chrome-192x192.png'
import styles from './styles/Navbar.module.css'

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const classNames = isActive
    ? `${styles.navToggleBars} ${styles.navActive}`
    : styles.navToggleBars;

  return (
    <div className={styles.navbar}>
      {/* Logo */}
      <a className={styles.logo} href="/">
        <Image
          src={logoImage}
          width={60}
          height={60}
          alt='Trajet Logo'
        />
      </a>
      {/* End Logo */}

      {/* Hamburger Menu */}
      <div className={styles.navToggleContainer}>
        <button className={isActive
                            ? `${styles.navToggleBars} ${styles.navActive}`
                            : styles.navToggleBars} 
          onClick={toggleClass}>
          <div className={styles.navBarTop}></div>
          <div className={styles.navBarMiddle}></div>
          <div className={styles.navBarBottom}></div>
        </button>
      </div>
      {/* End Hamburger Menu */}

      {/* Main Navigation Menu */}
      <nav className={isActive
          ? `${styles.navContainer} ${styles.navActive}`
          : styles.navContainer}>
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
      {/* End Main Navigation Menu */}

    </div>

  )
}

export default Navbar