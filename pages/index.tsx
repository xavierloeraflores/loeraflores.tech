import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.scss"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Xavier Loera Flores</title>
        <meta name="description" content="Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
