import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/experiment.module.css'
import Slider from '../components/slider'
import Buttons from '../components/buttons'
import Link from 'next/link'
import { Button, Radio, Checkbox, Row, Col } from 'antd'
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, orderBy } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router'
import Explanation from '../components/explanation'
import { useContext } from "react"
import AppContext from "../components/AppContext"
import ShortSurvey from '../components/shortsurvey'




export default function Assessment({ partOrder, partInd, setPartInd, allDone, setAllDone }) {
    const context = useContext(AppContext)
    const router = useRouter()


    //image
    let imageOrder = ['1', '2'];
    const [imOrderInd, setImOrderInd] = useState(0)
    const [imagePath, setimagePath] = useState('/' + partOrder[partInd] + '_' + imageOrder[imOrderInd] + '_1' + '.png');

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

    var slider = new Slider;


    //progress
    const [readExplanation, setReadExplanation] = useState(false)
    const [finishAssess, setFinishAssess] = useState(false)
    const [finishSurvey, setFinishSurvey] = useState(false)




    function handleClick() {

        if (captionText == 'Click on image to see registration result') {
            setCaptionText('Click on image to see x-ray image');
            setimagePath('/' + partOrder[partInd] + '_' + imageOrder[imOrderInd] + '_2' + '.png');
        }
        else {
            setCaptionText('Click on image to see registration result');
            setimagePath('/' + partOrder[partInd] + '_' + imageOrder[imOrderInd] + '_1' + '.png');
        }
        setClickCount(clickcount + 1)


    }


    useEffect(() => {
        console.log('***********************')
        console.log(context.session)
        console.log('This is case #' + imOrderInd)
        console.log('Clickcount:' + clickcount)
        console.log('Current image:' + imagePath)
        console.log('Slider value: ' + slider.state.values)
        console.log('User may continue:' + canContinue)
        console.log('part:' + partOrder[partInd])
        console.log('***********************')

    });


    const handleChangeImage = (e) => {
        e.preventDefault();
        if (imOrderInd + 1 == imageOrder.length) {
            // router.push('/questionnaire')
            setFinishAssess(true)
            console.log('Done with experiments')
        }
        else {
            if (canContinue) {
                addDoc(collection(db, "data"), {
                    canContinue,
                    imagePath,
                    valueConf
                })
                setImOrderInd(imOrderInd + 1);
                setimagePath('/' + partOrder[partInd] + '_' + imageOrder[imOrderInd + 1] + '_1' + '.png');
                setCaptionText('Click on image to see registration result');
                setCanContinue(false)
                setValueConf(0)
                setClickCount(0)
            }
            else { alert("Please make sure to complete all the fields!"); }
        }

    }


    return (

        <>
            {(!readExplanation) ?
                <>
                    <Explanation
                        partOrder={partOrder}
                        partInd={partInd}
                        readExplanation={readExplanation}
                        setReadExplanation={setReadExplanation}

                    />
                </>
                :
                <>
                    {(!finishAssess) ?
                        <>
                            <h1 className={styles.header}>
                                Image {imOrderInd + 1}/ {imageOrder.length}
                            </h1>

                            <div className={styles.imageBox} onClick={handleClick}>
                                <Image className={styles.imageBorder} src={imagePath} height={350} width={350}></Image>
                                <p className={styles.caption}>{captionText}</p>
                            </div>

                            <p className={styles.questions}>1) How would you assess this registration result?</p>

                            <Slider />

                            <p className={styles.questions}>2) How confident are you on your assessment?</p>

                            <Buttons
                                valueConf={valueConf}
                                setValueConf={setValueConf}
                                clickcount={clickcount}
                                setCanContinue={setCanContinue}
                            />

                            <div>
                                <Button disabled={!canContinue} className={styles.btn} onClick={handleChangeImage}>
                                    Next
                            </Button>
                            </div>
                        </>
                        :
                        <>
                            <ShortSurvey
                                partOrder={partOrder}
                                partInd={partInd}
                                setPartInd={setPartInd}
                                readExplanation={readExplanation}
                                setReadExplanation={setReadExplanation}
                                finishAccess={finishAssess}
                                setFinishAccess={setFinishAssess}
                                imOrderInd={imOrderInd}
                                setImOrderInd={setImOrderInd}
                                allDone={allDone}
                                setAllDone={setAllDone}
                            />


                        </>


                    }
                </>
            }



        </>
    )
}

