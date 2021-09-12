import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="Author" content="Andrew" />
      </Head>
      <h1>Home</h1>
    </div>
  )
}
