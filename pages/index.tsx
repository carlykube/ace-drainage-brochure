import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lawn Drainage | Serving Clear Lake, TX and Surrounding Areas</title>
        <meta name="description" content="Standing water? Ace Drainage will design and install a custom drainage solution for your home, guaranteed to drain standing water from your yard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>
          Ace Drainage Company
        </h2>
        <p>Lorem ipsum in magna sit incididunt eiusmod veniam ut quis occaecat sunt quis ex cupidatat in ea in exercitation.</p>

        <h1 className={styles.title}>
          Get Lawn Drainage in Clear Lake
        </h1>
        <p>Lorem ipsum in magna sit incididunt eiusmod veniam ut quis occaecat sunt quis ex cupidatat in ea in exercitation.</p>
      </main>

      <footer className={styles.footer}>
        <div>Contact Us</div>
        <div>
          <a href="tel:2817447871">281-744-7871</a>
        </div>
        <div>
          <a href="mailto:mark@acedrainage.com">mark@acedrainage.com</a>
        </div>
      </footer>
    </div>
  )
}

export default Home
