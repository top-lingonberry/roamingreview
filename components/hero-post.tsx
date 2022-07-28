import Image, { StaticImageData } from 'next/image'
import ReadMore from './read-more'
import styles from './styles/HeroPost.module.css'

type Props = {
  title: string,
  coverImage: StaticImageData,
  link: string
}

const HeroPost = ({
  title,
  coverImage,
  link
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
        <div className={styles.heroTitle}>
          <h3>Latest Post</h3>
          <h1>{title}</h1>
          <ReadMore target={link} />
        </div>
    </section>
  )
}

export default HeroPost