import Image from 'next/image'
import { useState } from 'react'
import logoImage from '../public/android-chrome-192x192.png'
import styles from './styles/Navbar.module.css'

const Navbar = () => {
  const [isNavActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };

  const classNames = isNavActive
    ? `${styles.navToggleBars} ${styles.navActive}`
    : styles.navToggleBars;

  return (
    <nav className={isNavActive
                      ? `${styles.navContainer} ${styles.navActive}`
                      : styles.navContainer}>
      <div className={styles.navSpacer}>
        {/* Spacer for Centering Navigation */}
      </div>
      <ul className={styles.navLinksContainer}>
        <li><a href="/about" className={styles.navLink}>About</a></li>
        <li><a href="/posts" className={styles.navLink}>Posts</a></li>
        <li><a href="/contact" className={styles.navLink}>Contact</a></li>
      </ul>
      <div className={styles.menuBar}>
        <a className={styles.logo} href="/">
          <Image
            src={logoImage}
            width={60}
            height={60}
            alt='Trajet Logo'
          />
        </a>
        <div className={styles.burgerContainer}>
          <button className={isNavActive
                              ? `${styles.burgerBars} ${styles.navActive}`
                              : styles.burgerBars}
          onClick={toggleNav}>
            <div className={styles.burgerBar1}></div>
            <div className={styles.burgerBar2}></div>
            <div className={styles.burgerBar3}></div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar