import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from './slider.js'

export default function Home() {
  return (
    <div>
      <h1>1/36</h1>
      <p>How would you assess this registration result?</p>
      <div className={styles.row}>
        <div className={styles.column1}>
          <Image src="/sample2.png" height={300} width={300}></Image>
        </div>
        <div className={styles.column2}>
          <Image src="/sample2.png" height={300} width={300}></Image>
        </div>
      </div>  
      <Slider />
      <p className={styles.btn}>next</p>
    </div>
  )
}
