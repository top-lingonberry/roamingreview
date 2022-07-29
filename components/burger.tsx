import { useState } from 'react'
import styles from './styles/Burger.module.css'

const Burger = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const classNames = isActive
    ? `${styles.navToggleBars} ${styles.navActive}`
    : styles.navToggleBars;

  return (
    <div className={styles.navToggleContainer}>
    <button className={classNames} onClick={toggleClass}>
      <div className={styles.navBarTop}></div>
      <div className={styles.navBarMiddle}></div>
      <div className={styles.navBarBottom}></div>
    </button>
    </div>
  )
}

export default Burger