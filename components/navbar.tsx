import { useState } from 'react'
import Image from 'next/image'
import styles from './styles/Navbar.module.css'
import logoImage from '../public/android-chrome-192x192.png'

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const classNames = isActive
    ? `${styles.navToggleBars} ${styles.navActive}`
    : styles.navToggleBars;

  return (
    <nav className={styles.navbar}>
      <a className={styles.logo} href="/">
        <Image
          src={logoImage}
          width={60}
          height={60}
          alt='Trajet Logo'
        />
      </a>
      <div className={styles.navToggleContainer}>
        <button className={classNames} onClick={toggleClass}>
          <div className={styles.navBarTop}></div>
          <div className={styles.navBarMiddle}></div>
          <div className={styles.navBarBottom}></div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar