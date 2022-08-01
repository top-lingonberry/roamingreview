import { useState } from 'react'
import Image from 'next/image'
import logoImage from '../public/android-chrome-192x192.png'
import styles from './styles/Navbar.module.css'

const Navbar = () => {

  const [navActive, setNavActive] = useState(false);

  const toggleNavActive = () => {
    setNavActive(!navActive);
  };

  const navClassNames = navActive
    ? `${styles.navContainer} ${styles.navActive}`
    : styles.navContainer;

  return (
    <nav className={navClassNames}>
      <div className={styles.navBar}>
        <a className={styles.navLogo} href="/">
          <Image
            src={logoImage}
            width={60}
            height={60}
            alt='Trajet Logo'
          />
        </a>
        <div className={styles.burgerContainer}>
          <button className={styles.burgerBars} onClick={toggleNavActive}>
            <div className={styles.burgerBar1}></div>
            <div className={styles.burgerBar2}></div>
            <div className={styles.burgerBar3}></div>
          </button>
        </div>
      </div>
      <div className={styles.navMenu}>
        <ul>
          <li><a href='/about'>About</a></li>
          <li><a href='/posts'>Posts</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar