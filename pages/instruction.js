import React, { useEffect, useState } from "react";
import styles from '../styles/instruction.module.css'
import Link from 'next/link'
import { Button, Checkbox, Row, Col } from 'antd'
import 'antd/dist/antd.css';
import { useContext } from "react"
import AppContext from "../components/AppContext"

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

            <div className={styles.text}> Your task today is to evaluate the 2D/3D registration results of the pelvis.</div>

            <div className={styles.text}> 2D/3D registration, the alignment between 3D spatial data and 2D projective data, is a key technology for image-guided interventions. It is commonly used in computer vision, art restoration, medical imaging, and satellite image analysis. When 2D/3D registration is deployed in a clinical setting, clinicians or medical technicians will need to determine whether a registration result given by the system is precise or imprecise. Below is an example visualization of 2D/3D registration.</div>

            <div>
              <img className={styles.instructionImageBox} src="2d3dRegistration1.png"></img>
            </div>

            <div className={styles.text}>Given a 2D x-ray image, the 2D/3D registration algorithm computes an estimate of the 3D pose of the pelvis, and this information can be overlayed on the 2D x-ray image. In this study, you will be assessing 2D/3D registration results using 3 different overlay paradigms.</div>

            <div>
              <Button className={styles.centerButton} variant="btn btn-success" onClick={continueChange}>Continue</Button>
            </div>
            <br />
          </>
          :
          <>
            <div className={styles.text}>
              <ol>
                <li> The main study has three parts, each testing a different visualization paradigm. </li>
                <li> Each part will consist of an explanation and example cases of the paradigm, following with 12 images with the paradigm.</li>
                <li> For each image, click on the image to see the registration result at least once. You can change the view (between the x-ray and the overlay) as many times as you'd like. Then, provide your assessment of the registration result, answer the following question, and when you are done, move on to the next image.</li>
                <li> Please take your time. Accuracy is more important than speed. </li>
                <li> After completing the main study, you need to complete a post-study survey. </li>

              </ol>

            </div>


            <div className={styles.text}>
              Now, click that you have reviewed the instructions and you are ready to begin the test.
      </div>
            <div className={styles.text}>
              <Checkbox onChange={checkboxHandler1} style={{ fontSize: "20px", textAlign: 'left', alignSelf: 'stretch' }}>
                Once started, you will need to complete the study in one sitting without any interruption. Please note, the survey is estimated to take ~30 minutes.
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
