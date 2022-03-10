import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>Fantastic Foods</title>
        <meta name="description" content="Home Cooked Gujrati Meals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
    
    </div>
  )
}