import Image from 'next/image'
import Burger from './burger'
import Logo from './logo'
import NavigationMenu from './navigation-menu'
import styles from './styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Burger />
      <NavigationMenu />
    </div>
  )
}

export default Navbar