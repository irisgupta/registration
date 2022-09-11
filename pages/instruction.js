import React, { useEffect, useState } from "react";
import styles from '../styles/instruction.module.css'
import Link from 'next/link'
import { Button, Checkbox, Row, Col } from 'antd'
import 'antd/dist/antd.css';
import { useContext } from "react"
import AppContext from "../components/AppContext"
import Image from 'next/image'


export default function Instruction() {
  const context = useContext(AppContext)


  const [acceptFirst, setAcceptFirst] = useState(false);

  const [rule2, setRule2] = useState(false);
  const [rule1, setRule1] = useState(false);
  const [agree, setAgree] = useState(false);

  const checkboxHandler1 = () => {
    setRule1(true);
  }

  const checkboxHandler2 = () => {
    setRule2(true);
  }

  const checkboxHandler = () => {
    if (rule1 & rule2) {
      setAgree(!agree);
    }
  }

  const continueChange = () => {
    setAcceptFirst(true);
  }

  return (
    <>
      <div className={styles.container}>
        {/* <div>{context.session}</div> */}
        <h1>Instructions</h1>

        {!acceptFirst ?
          <>

            <div className={styles.text}> Welcome to 2D/3D Registration Assessment! Your task today is to evaluate the 2D/3D registration results of the pelvis.
      </div>

            <div className={styles.text}> 2D/3D registration, the registration between intraoperative 2D images and the appropriate 3D models, is a key technology for image-guided interventions. Once this is deployed in a clinical setting, clinicians or medical technicians will need to interpret whether a registration result given by the system is acceptable.
      </div>
            <div className={styles.text}> The following figure shows an example workflow of how 2D/3D registration can be used for robot and femur anatomy pose estimation in image-based navigation for robot-assisted femoroplasty (<a href="https://ieeexplore.ieee.org/document/9151197/" target="_blank">Gao et al., 2020</a>).
            </div>
            <div className={styles.imageBox}>
              <Image className={styles.imageBorder} src={'/2d3dExample.png'} height={1000} width={500}></Image>
            </div>

            <div className={styles.contButtonContainer} >

              <Button variant="btn btn-success" onClick={continueChange}>
                Continue
      </Button>
            </div>

          </>
          :
          <>
            <div className={styles.text}>
              <ol>
                <li> The main study has three parts, each testing a different visualization paradigm. </li>
                <li>  Each part will consist of an explanation and example cases of the paradigm, 36 images with the paradigm, and a short survey.</li>
                <li> For each image, click on the image to see the registration result at least once. You can change the view (between the x-ray and the overlay) as many times as you'd like. Then, provide your assessment of the registration result, answer the following question, and when you are done, move on to the next image.</li>
                <li> After completing the main study, you need to complete a post-study survey. </li>

              </ol>

            </div>


            <div className={styles.text}>
              Now, click that you have reviewed the instructions and you are ready to begin the test.
      </div>
            <div className={styles.text}>
              <Checkbox onChange={checkboxHandler1} style={{ fontSize: "20px", textAlign: 'left', alignSelf: 'stretch' }}>
                Once started, you will need to complete the study in one sitting without any interruption. Please note, the survey is estimated to take 30-40 minutes.
      </Checkbox>
            </div>
            <div className={styles.text}>
              <Checkbox onChange={checkboxHandler2} style={{ fontSize: "20px", textAlign: 'left', alignSelf: 'stretch' }}>
                You should not close/reload the tab in which you are doing the study until you complete all the images. Otherwise, you would have to start over. You cannot click to go back either.
      </Checkbox>
            </div>
            <div className={styles.text}>
              <Checkbox onChange={checkboxHandler} style={{ fontSize: "20px", textAlign: 'left', alignSelf: 'stretch' }}>
                I have reviewed the instructions and I will complete the study as accurately as I can.
      </Checkbox>
            </div>
            <div className={styles.text}>
              <Link
                href="/experiment" passHref>
                <Button disabled={!agree} component="a">
                  Start
        </Button>
              </Link>
            </div>

          </>
        }
      </div>
    </>

  );
}
