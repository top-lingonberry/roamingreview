import type { NextPage } from 'next'
import Head from 'next/head'
import HeroPost from '../components/hero-post'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import petraPhoto from '../public/images/monastery.jpg'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />

      <Head>
        <meta charSet="utf-8" />
        <title>Home | Trajet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>

        <HeroPost title={"Exploring Petra"} coverImage={petraPhoto} link={"petra"} />

        <section className="past">
          <div className="article">
            <h2>Previous Article 1</h2>
            <p>Lorum ipsum yadda, yadda, yadda...</p>
          </div>
          <div className="article">
            <h2>Previous Article 2</h2>
            <p>Lorum ipsum yadda, yadda, yadda...</p>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home