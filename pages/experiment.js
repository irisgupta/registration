import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/experiment.module.css'
import Slider from '../components/slider.js'
import Link from 'next/link'
import {Button, Checkbox, Row, Col} from 'antd'
import Buttons from '../components/buttons.js'
import React, { useEffect, useState } from "react";




export default function Experiment() {

    // const [assess, setAssess] = useState(false);
    // const [confidence, setConfidence] = useState(false);
    // const [done, setDone] = useState(false);

    const [count, setCount] = useState(0);
    const [captionText, setCaptionText] = useState('Click on image to see registration result');
    const [imagePath, setImagePath] = useState('/1_1.png');

    function handleClick() {
        if (captionText == 'Click on image to see registration result') {
            setCaptionText('Click on image to see x-ray image');
            setImagePath('/1_2.png');
        }
        else {
            setCaptionText('Click on image to see registration result');
            setImagePath('/1_1.png');
        }
        setCount(count + 1)
        console.log(count)
      }

    // const assessHandler = () => {
    // setAssess(true);
    // console.log(assess)
    // }

    // const confidenceHandler = () => {
    // setConfidence(true);
    // if (count > 0 && assess){
    //     setDone(true)
    // }
    // }


  return (
    <div >
     
      <h1 className={styles.header}>1/36</h1>
      <div className={styles.image}>
        <Link href="/experiment">
            <a onClick={() => handleClick()}><Image className={styles.border} src={imagePath} height={350} width={350}></Image></a>
        </Link>
        <p className={styles.caption}>{captionText}</p>
      </div>
      <p className={styles.questions}>1) How would you assess this registration result?</p>
      <Slider />
      <p className={styles.questions}>2) How confident are you on your assessment?</p>
      <Buttons />
      <div className={styles.btn}> 
      <Link
      href= "/questionnaire" passHref>
        <Button >
          Next
        </Button>
      </Link>
      </div>
    
    </div>
  )
}