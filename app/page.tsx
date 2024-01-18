// import styles from '../styles/Home.module.css'
import UnityApp from './components/UnityApp'
import Head from 'next/head'
export default function Home() {
  return (
    <div className="mx-4">
      <Head>
        <title>Unity React</title>
        <meta name="description" content="Unity React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UnityApp />
    </div>
  )
}
