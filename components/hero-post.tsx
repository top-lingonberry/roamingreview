import Image, { StaticImageData } from 'next/image'
import styles from './styles/HeroPost.module.css'

type Props = {
  title: string,
  coverImage: StaticImageData
}

const HeroPost = ({
  title,
  coverImage
}: Props) => {
  return (
    <section className={styles.container}>
        <Image
          className={styles.heroImage}
          src={coverImage}
          layout='fill'
          objectFit='cover'
          alt='Petra, Jordan'
        />
        <h1 className={styles.heroTitle}>{title}</h1>
    </section>
  )
}

export default HeroPost