import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from './slider.js'
import Link from 'next/link'
import Buttons from './buttons.js'

export default function Registration() {
  return (
    <div>
      <h1 className={styles.header}>1/36</h1>
      <div className={styles.image}>
        <Link href="./"><Image className={styles.border} src="/sample.png" height={350} width={350}></Image></Link>
        <p className={styles.caption}>Click on image to see registration result</p>
      </div>
      <p className={styles.questions}>1) How would you assess this registration result?</p>
      <Slider />
      <p className={styles.questions}>2) How confident are you on your assessment?</p>
      <Buttons />
      <p className={styles.btn}>next</p>
    </div>
  )
}