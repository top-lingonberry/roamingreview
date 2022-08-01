import type { NextPage } from 'next'
import Head from 'next/head'
import CustomHead from '../components/head'
import Navbar from '../components/navbar'
import HeroPost from '../components/hero-post'
import styles from '../styles/Home.module.css'
import petraPhoto from '../public/images/monastery.jpg'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />

      <Head>
        <title>Home | Trajet</title>
      </Head>

      <CustomHead />

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