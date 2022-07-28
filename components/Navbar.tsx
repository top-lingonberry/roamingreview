import Image from 'next/image'
import styles from './styles/Navbar.module.css'
import logoImage from '../public/android-chrome-192x192.png'


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.logo} href="index.html">
        <Image
          src={logoImage}
          width={50}
          height={50}
          alt='Trajet Logo'
        />
      </a>
      <div className={styles.navToggleContainer}>
        <button className={styles.navToggleBars}>
          <div className={styles.navBarTop}></div>
          <div className={styles.navBarMiddle}></div>
          <div className={styles.navBarBottom}></div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar