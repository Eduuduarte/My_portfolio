import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { About, Home, Contact, Footer, Navbar, Portfolio, Skills, Service } from '../components';
import Head from 'next/head';

const Index: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/assets/Avatar1.png' />

        <title>Eduardo Duarte - Desenvolvedor Fullstack | Portifólio</title>

        <meta name="title" content="Eduardo Duarte - Desenvolvedor Fullstack | Portifólio" />
        <meta name="description" content="Desenvolvedor de websites, landing pages, aplicativos mobiles e API" />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eduuduarte-portifolio.netlify.app" />
        <meta property="og:title" content="Eduardo Duarte - Desenvolvedor Fullstack | Portifólio" />
        <meta property="og:description" content="Desenvolvedor de websites, landing pages, aplicativos mobiles e API" />
        <meta property="og:image" content="https://eduuduarte-portifolio.netlify.app/assets/portifolio.png" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://eduuduarte-portifolio.netlify.app/" />
        <meta property="twitter:title" content="Eduardo Duarte - Desenvolvedor Fullstack | Portifólio" />
        <meta property="twitter:description" content="Desenvolvedor de websites, landing pages, aplicativos mobiles e API" />
        <meta property="twitter:image" content="https://eduuduarte-portifolio.netlify.app/assets/portifolio.png" />

      </Head>

      <div className={styles.index}>
        <Home />
        <Navbar />
        <About />
        <Portfolio />
        <Skills />
        <Service />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Index;
