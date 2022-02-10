import Head from 'next/head'
import Link from 'next/link'
import styles from '@src/styles/Home.module.scss'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Static App - justalk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Testing SWR</h1>
        <Link href="/test1">
          <a>TEST 3</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        ***
      </footer>
    </div>
  )
}
