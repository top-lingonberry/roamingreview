import Head from '../components/head';

export default function Index() {
  return (
    <>
      <html lang="en">
        <Head />
        <body>
          <div className="primary-container">
            <a href="/index.html" className="logo">RR</a>
              <div className="nav-toggle-container">
                <div className="nav-toggle-menu">Menu</div>
                <button className="nav-toggle-bars">
                  <div className="nav-bar-top"></div>
                  <div className="nav-bar-middle"></div>
                  <div className="nav-bar-bottom"></div>
                </button>
              </div>
              <section className="top">
              <div className="top-content">
                <h3>TOP POST</h3>
                <h1>This is the Top Post</h1>
              </div>
            </section>
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
        </body>
      </html>
    </>
  )
}