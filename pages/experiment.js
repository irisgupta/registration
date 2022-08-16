import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/experiment.module.css'
import Slider from '../components/slider'
import Buttons from '../components/buttons'
import Link from 'next/link'
import { Button, Radio, Checkbox, Row, Col } from 'antd'
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";




export default function Experiment() {



  //image
  let imageOrder = ['1_1', '1_2'];
  const [imOrderInd, setImOrderInd] = useState(0)
  const [imagePath, setimagePath] = useState('/' + imageOrder[imOrderInd] + '_1' + '.png');

  const [captionText, setCaptionText] = useState('Click on image to see registration result');

  //information
  const [clickcount, setClickCount] = useState(0);
  //time taken

  //criteria
  const [canContinue, setCanContinue] = useState(false)   //continue on to next image
  const [done, setDone] = useState(false);   //continue on to post study questionnaire section


  //user responses
  const [valueAssess, setValueAssess] = useState(0.0);
  const [valueConf, setValueConf] = useState(0);

  const slider = new Slider;




  function handleClick() {

    if (captionText == 'Click on image to see registration result') {
      setCaptionText('Click on image to see x-ray image');
      setimagePath('/' + imageOrder[imOrderInd] + '_2' + '.png');
    }
    else {
      setCaptionText('Click on image to see registration result');
      setimagePath('/' + imageOrder[imOrderInd] + '_1' + '.png');
    }
    setClickCount(clickcount + 1)
  }



  useEffect(() => {
    console.log('***********************')
    console.log('This is case #' + imOrderInd)
    console.log('Clickcount:' + clickcount)
    console.log('Current image:' + imagePath)
    console.log('Slider value: ' + slider.state.slider_value)
    console.log('User may continue:' + canContinue)
    console.log('***********************')

  });


  const handleChangeImage = (e) => {
    // e.preventDefault();

    if (canContinue) {
      addDoc(collection(db, "data"), {
        canContinue,
        imagePath,
        valueConf
      })
      setImOrderInd(imOrderInd + 1);
      setimagePath('/' + imageOrder[imOrderInd + 1] + '_1' + '.png');
      setCaptionText('Click on image to see registration result');
      setCanContinue(false)
      setValueConf(0)
      setClickCount(0)
    }
    else { alert("Please make sure to complete all the fields!"); }


  }


  return (
    <div >

      <h1 className={styles.header}>

        Image {imOrderInd + 1}/ {imageOrder.length}

      </h1>


      <div className={styles.imageBox} onClick={handleClick}>
        <Image className={styles.imageBorder} src={imagePath} height={350} width={350}></Image>
        <p className={styles.caption}>{captionText}</p>

      </div>


      <p className={styles.questions}>1) How would you assess this registration result?</p>

      <Slider
      />

      <p className={styles.questions}>2) How confident are you on your assessment?</p>

      <Buttons
        valueConf={valueConf}
        setValueConf={setValueConf}
        clickcount={clickcount}
        setCanContinue={setCanContinue}
      />

      <div className={styles.btn} onClick={handleChangeImage}>

        <Button disabled={!canContinue}>
          Next
        </Button>

      </div>


      {/* <div className={styles.btn}> 
      <Link
      href= "/questionnaire" passHref>
        <Button disabled={!done}>
          Done
        </Button>
      </Link>
      </div> */}

    </div>
  )
}

