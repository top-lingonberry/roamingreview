import styles from './styles/ReadMore.module.css'

type Props = {
  target: string
}

const ReadMore = ({
  target
}: Props) => {
  return (
    <a className={styles.readMore} href={target}>
      READ MORE
    </a>
  )
}

export default ReadMore