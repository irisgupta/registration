import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/experiment.module.css'
import Buttons from '../components/buttons'
import Link from 'next/link'
import { Button, Radio, Checkbox, Row, Col } from 'antd'
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router'
import Assessment from '../components/assessment'


export default function Experiment() {


  const [allDone, setAllDone] = useState(false)   //continue on to post study questionnaire section


  //parts
  let generate_order = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  const [partOrder, setPartOrder] = useState(generate_order([1, 2, 3]))
  const [partInd, setPartInd] = useState(0)

  let imageOrder = ['1', '2'];
  const [imOrderInd, setImOrderInd] = useState(0)
  const [imagePath, setImagePath] = useState('/' + partOrder[partInd] + '_' + imageOrder[imOrderInd] + '_1' + '.png');





  return (
    <>
      {(!allDone) ?

        <Assessment
          partOrder={partOrder}
          partInd={partInd}
          setPartInd={setPartInd}
          setAllDone={setAllDone}
          imageOrder={imageOrder}
          imOrderInd={imOrderInd}
          setImOrderInd={setImOrderInd}
          imagePath={imagePath}
          setImagePath={setImagePath}
        />

        :
        <div className={styles.donebutton_container}>
          <Link
            href="/questionnaire" passHref>
            <Button className={styles.donebtn}>
              Continue to final post-study survey
            </Button>
          </Link>
        </div>


      }


    </>
  )

}
