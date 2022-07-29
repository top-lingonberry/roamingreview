import Image from 'next/image'
import { useState } from 'react'
import logoImage from '../public/android-chrome-192x192.png'
import styles from '../styles/About.module.css'

const About = () => {


  return (
    <nav className={styles.navContainer}>
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
          <button className={styles.burgerBars}>
            <div className={styles.burgerBar1}></div>
            <div className={styles.burgerBar2}></div>
            <div className={styles.burgerBar3}></div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default About