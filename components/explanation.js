
import { Button, Radio, Checkbox, Row, Col } from 'antd'
import styles from '../styles/instruction.module.css'
import React, { useState } from 'react';
import Image from 'next/image'
import { db } from "../firebase";
import { collection, addDoc, orderBy, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useContext } from "react"
import AppContext from "../components/AppContext"



export default function Explanation({ partOrder, partInd, imageOrder, poseOrder, setImagePath, readExplanation, setReadExplanation, timestampInd, setTimestampInd }) {

    const context = useContext(AppContext)

    const continueChange = () => {
        setReadExplanation(true);
        setImagePath('/data_36cases/' + imageOrder[0] + '/org_xray.png');
        setTimestampInd(timestampInd + 1);


        addDoc(collection(db, context.session), {
            timestampInd,
            partInd,
            imageOrder,
            poseOrder,
            timestamp: serverTimestamp()
        })

    }
    const [expCaptionText1, setexpCaptionText1] = useState('Click on image to see registration result');
    const [expCaptionText2, setexpCaptionText2] = useState('Click on image to see registration result');
    const [expCaptionText3, setexpCaptionText3] = useState('Click on image to see registration result');
    const [expCaptionText4, setexpCaptionText4] = useState('Click on image to see registration result');
    const [expImagePath1, setExpImagePath1] = useState('./org_xray.png');
    const [expImagePath2, setExpImagePath2] = useState('./org_xray.png');
    const [expImagePath3, setExpImagePath3] = useState('./org_xray.png');
    const [expImagePath4, setExpImagePath4] = useState('./org_xray.png');

    function handleClick1() {

        if (expCaptionText1 == 'Click on image to see registration result') {
            setexpCaptionText1('Click on image to see x-ray image');
            setExpImagePath1('./' + partOrder[partInd] + '_p0.png');
        }
        else {
            setexpCaptionText1('Click on image to see registration result');
            setExpImagePath1('./org_xray.png');

        }

    }

    function handleClick2() {

        if (expCaptionText2 == 'Click on image to see registration result') {
            setexpCaptionText2('Click on image to see x-ray image');
            setExpImagePath2('./' + partOrder[partInd] + '_p1.png');
        }
        else {
            setexpCaptionText2('Click on image to see registration result');
            setExpImagePath2('./org_xray.png');

        }

    }

    function handleClick3() {

        if (expCaptionText3 == 'Click on image to see registration result') {
            setexpCaptionText3('Click on image to see x-ray image');
            setExpImagePath3('./' + partOrder[partInd] + '_p2.png');
        }
        else {
            setexpCaptionText3('Click on image to see registration result');
            setExpImagePath3('./org_xray.png');

        }

    }

    function handleClick4() {

        if (expCaptionText4 == 'Click on image to see registration result') {
            setexpCaptionText4('Click on image to see x-ray image');
            setExpImagePath4('./' + partOrder[partInd] + '_p3.png');
        }
        else {
            setexpCaptionText4('Click on image to see registration result');
            setExpImagePath4('./org_xray.png');

        }

    }

    return (
        <>
            {(partOrder[partInd] == 'vis_1') ?
                <>
                    <h1 className={styles.header}>
                        Paradigm {partInd + 1}
                    </h1>
                    <div className={styles.container}>
                        <p className={styles.descript}>This visualization paradigm is generated with the ray-casted edges of the 2D/3D registration result of the pelvis. Please take a look at the following example cases of "Very precise", "Precise", "Imprecise", "Very imprecise" and their overlays by clicking on the image. You can click as many times as you'd like. After careful inspection of these cases, please click continue. </p>
                        <div className={styles.expButton}>
                            <Button variant="btn btn-success" onClick={continueChange}>Continue</Button>
                        </div>
                        <div className={styles.imageBox} onClick={handleClick1}>
                            <p className={styles.captionImg}> [Very precise registration]</p>
                            <img className={styles.imageBorder} src={expImagePath1}></img>
                            <p className={styles.caption}>{expCaptionText1}</p>
                        </div>

                        <div className={styles.imageBox} onClick={handleClick2}>
                            <p className={styles.captionImg}> [Precise registration]</p>
                            <img className={styles.imageBorder} src={expImagePath2}></img>
                            <p className={styles.caption}>{expCaptionText2}</p>
                        </div>
                        <div className={styles.imageBox} onClick={handleClick3}>
                            <p className={styles.captionImg}> [Imprecise registration]</p>
                            <img className={styles.imageBorder} src={expImagePath3}></img>
                            <p className={styles.caption}>{expCaptionText3}</p>
                        </div>

                        <div className={styles.imageBox} onClick={handleClick4}>
                            <p className={styles.captionImg}> [Very imprecise registration]</p>
                            <img className={styles.imageBorder} src={expImagePath4}></img>
                            <p className={styles.caption}>{expCaptionText4}</p>
                        </div>


                    </div>

                </>
                : (partOrder[partInd] == 'vis_3') ?
                    <>
                        <div className={styles.container}>
                            <h1 className={styles.header}>
                                Paradigm {partInd + 1}
                            </h1>
                            <p className={styles.descript}>This visualization paradigm is generated by searching through the local regions of the digitally reconstructed radiograph to find the best match in the original x-ray and visualizing the vectors as arrows. Please take a look at the following example cases of "Very precise", "Precise", "Imprecise", "Very imprecise" and their overlays by clicking on the image. You can click as many times as you'd like. After careful inspection of these cases, please click continue.</p>
                            <div className={styles.expButton}>
                                <Button variant="btn btn-success" onClick={continueChange}>Continue</Button>
                            </div>
                            <div className={styles.imageBox} onClick={handleClick1}>
                                <p className={styles.captionImg}> [Very precise registration]</p>
                                <img className={styles.imageBorder} src={expImagePath1}></img>
                                <p className={styles.caption}>{expCaptionText1}</p>
                            </div>

                            <div className={styles.imageBox} onClick={handleClick2}>
                                <p className={styles.captionImg}> [Precise registration]</p>
                                <img className={styles.imageBorder} src={expImagePath2}></img>
                                <p className={styles.caption}>{expCaptionText2}</p>
                            </div>
                            <div className={styles.imageBox} onClick={handleClick3}>
                                <p className={styles.captionImg}> [Imprecise registration]</p>
                                <img className={styles.imageBorder} src={expImagePath3}></img>
                                <p className={styles.caption}>{expCaptionText3}</p>
                            </div>

                            <div className={styles.imageBox} onClick={handleClick4}>
                                <p className={styles.captionImg}> [Very imprecise registration]</p>
                                <img className={styles.imageBorder} src={expImagePath4}></img>
                                <p className={styles.caption}>{expCaptionText4}</p>
                            </div>


                        </div>

                    </>
                    :
                    <>
                        <div className={styles.container}>
                            <h1 className={styles.header}>
                                Paradigm {partInd + 1}
                            </h1>
                            <p className={styles.descript}>This visualization paradigm is generated by computing the mutual information between the original xray and the digitally reconstructed radiograph. The circled regions highlight the areas of uncertainty that the human inspector should take a closer look at. Please take a look at the following example cases of "Very precise", "Precise", "Imprecise", "Very imprecise" and their overlays by clicking on the image. You can click as many times as you'd like. After careful inspection of these cases, please click continue.</p>
                            <div className={styles.expButton}>
                                <Button variant="btn btn-success" onClick={continueChange}>Continue</Button>
                            </div>

                            <div className={styles.imageBox} onClick={handleClick1}>
                                <p className={styles.captionImg}> [Very precise registration]</p>
                                <img className={styles.imageBorder} src={expImagePath1}></img>
                                <p className={styles.caption}>{expCaptionText1}</p>
                            </div>

                            <div className={styles.imageBox} onClick={handleClick2}>
                                <p className={styles.captionImg}> [Precise registration]</p>
                                <img className={styles.imageBorder} src={expImagePath2}></img>
                                <p className={styles.caption}>{expCaptionText2}</p>
                            </div>
                            <div className={styles.imageBox} onClick={handleClick3}>
                                <p className={styles.captionImg}> [Imprecise registration]</p>
                                <img className={styles.imageBorder} src={expImagePath3}></img>
                                <p className={styles.caption}>{expCaptionText3}</p>
                            </div>

                            <div className={styles.imageBox} onClick={handleClick4}>
                                <p className={styles.captionImg}> [Very imprecise registration]</p>
                                <img className={styles.imageBorder} src={expImagePath4}></img>
                                <p className={styles.caption}>{expCaptionText4}</p>
                            </div>


                        </div>

                    </>


            }



        </>
    )




}