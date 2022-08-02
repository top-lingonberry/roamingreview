import Head from 'next/head'
import Image from 'next/image'
import logoImage from '../public/android-chrome-192x192.png'
import styles from '../components/styles/CustomErrors.module.css'

const Custom500 = () => {
  return (
    <>
      <Head>
        <title>500 Internal Server Error | Trajet</title>
      </Head>
      <div className={styles.errorContainer}>
        <a className={styles.navLogo} href="/">
          <Image
            src={logoImage}
            width={60}
            height={60}
            alt='Trajet Logo'
          />
        </a>
        <h1>500</h1>
        <h3>Internal Server Error</h3>
      </div>
    </>
  )
}

export default Custom500