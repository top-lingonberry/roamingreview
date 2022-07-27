import Image, { StaticImageData } from 'next/image'

type Props = {
  title: string,
  coverImage: StaticImageData
}

const TopPost = ({
  title,
  coverImage
}: Props) => {
  return (
    <section className="top">
      <div className="top-content">
        <h3>TOP POST</h3>
        <h1>{title}</h1>
        <Image src={coverImage} layout='fill' objectFit='contain' alt='Petra, Jordan' />
      </div>
    </section>
  )
}

export default TopPost