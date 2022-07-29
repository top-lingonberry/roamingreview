import Image from "next/image"
import logoImage from '../public/android-chrome-192x192.png'
import styles from './styles/Logo.module.css'

const Logo = () => {
  return (
    <a className={styles.logo} href="/">
      <Image
        src={logoImage}
        width={60}
        height={60}
        alt='Trajet Logo'
      />
    </a>
  )
}

export default Logo