import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="Author" content="Andrew" />
      </Head>
    </div>
  )
}
