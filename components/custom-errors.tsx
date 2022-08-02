import Head from 'next/head'
import Image from 'next/image'
import logoImage from '../public/android-chrome-192x192.png'
import styles from './styles/CustomErrors.module.css'

export enum ErrorCode {
  NotFound = '404',
  ServerError = '500'
}

type Props = {
  errorCode: ErrorCode
}

const CustomErrors = ({errorCode}: Props) => {
  return (
    <>
      <Head>
        <title>404 Page Not Found | Trajet</title>
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
        <h1>404</h1>
        <h3>Page Not Found</h3>
      </div>
    </>
  )
}

export default CustomErrors