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

  // const [partOrder, setPartOrder] = useState(generate_order(['vis_1', 'vis_2', 'vis_3']))
  const [partOrder, setPartOrder] = useState(['vis_1', 'vis_2', 'vis_3'])

  const [partInd, setPartInd] = useState(0)

  const [imageOrder, setImageOrder] = useState(generate_order(['AP_i0', 'AP_i1', 'AP_i2', 'AP_i3', 'PA_i0', 'PA_i1', 'PA_i2', 'PA_i3', 'OB_i0', 'OB_i1', 'OB_i2', 'OB_i3']))
  const [poseOrder, setPoseOrder] = useState(generate_order(['p0', 'p0', 'p0', 'p1', 'p1', 'p1', 'p2', 'p2', 'p2', 'p3', 'p3', 'p3']))
  const [imOrderInd, setImOrderInd] = useState(0)



  const [imagePath, setImagePath] = useState('/data_36cases/' + imageOrder[imOrderInd] + '/org_xray.png');



  return (
    <>
      {(!allDone) ?

        <Assessment
          partOrder={partOrder}
          partInd={partInd}
          setPartInd={setPartInd}
          setAllDone={setAllDone}
          imageOrder={imageOrder}
          setImageOrder={setImageOrder}
          poseOrder={poseOrder}
          setPoseOrder={setPoseOrder}
          imOrderInd={imOrderInd}
          setImOrderInd={setImOrderInd}
          imagePath={imagePath}
          setImagePath={setImagePath}
        />

        :
        <div className={styles.donebutton_container}>
          {/* <Link
            href="/questionnaire" passHref>
            <Button className={styles.donebtn}>
              Continue to final post-study survey
            </Button>
          </Link> */}


          <Link
            href="https://forms.gle/SiXRsa2QkvbUKcqWA" passHref>
            <Button className={styles.donebtn}>
              Continue to final post-study survey
            </Button>
          </Link>
        </div>


      }


    </>
  )

}
