import type { NextPage } from 'next'
import Head from 'next/head'
import TopPost from '../components/top-post'
import styles from '../styles/Home.module.css'
import petraPhoto from '../public/images/monastery.jpg'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <Head>
        <meta charSet="utf-8" />
        <title>The Roaming Review</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <a href="/index.html" className="logo">RR</a>
      <div className="nav-toggle-container">
        <div className="nav-toggle-menu">Menu</div>
        <button className="nav-toggle-bars">
          <div className="nav-bar-top"></div>
          <div className="nav-bar-middle"></div>
          <div className="nav-bar-bottom"></div>
        </button>
      </div>

      <TopPost title= {"Ukraine in the War"} coverImage={petraPhoto} />

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
  )
}

export default Home