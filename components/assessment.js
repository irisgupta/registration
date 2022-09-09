import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/experiment.module.css'
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
import { Range } from 'react-range';


export default function Assessment({ partOrder, partInd, setPartInd, setAllDone, imageOrder, imOrderInd, setImOrderInd, imagePath, setImagePath }) {
    const context = useContext(AppContext)
    const router = useRouter()


    //image
    // let imageOrder = ['1', '2'];
    // const [imOrderInd, setImOrderInd] = useState(0)
    // const [imagePath, setimagePath] = useState('/' + partOrder[partInd] + '_' + imageOrder[imOrderInd] + '_1' + '.png');

    const [captionText, setCaptionText] = useState('Click on image to see registration result');

    //information
    const [clickcount, setClickCount] = useState(0);
    //time taken

    //criteria
    const [canContinue, setCanContinue] = useState(false)   //continue on to next image

    //user responses
    const [valueAssess, setValueAssess] = useState([50]);
    const [valueConf, setValueConf] = useState(0);
    const [bubble, setBubble] = useState('Please move the slider');


    //progress
    const [readExplanation, setReadExplanation] = useState(false)
    const [finishAssess, setFinishAssess] = useState(false)


    //For counting number of clicks on the image and toggling between image/overlay
    function handleClick() {

        if (captionText == 'Click on image to see registration result') {
            setCaptionText('Click on image to see x-ray image');
            setImagePath('/' + partOrder[partInd] + '_' + imageOrder[imOrderInd] + '_2' + '.png');
        }
        else {
            setCaptionText('Click on image to see registration result');
            setImagePath('/' + partOrder[partInd] + '_' + imageOrder[imOrderInd] + '_1' + '.png');
        }
        setClickCount(clickcount + 1)


    }

    //For moving onto the next image
    const handleChangeImage = (e) => {
        // e.preventDefault();
        if (imOrderInd + 1 == imageOrder.length) {
            setFinishAssess(true)
            console.log('Done with part #' + (partInd + 1))
            setImOrderInd(0)
            // setImagePath('/' + partOrder[partInd] + '_' + imageOrder[0] + '_1' + '.png');
            setCaptionText('Click on image to see registration result');
            setCanContinue(false)
            setValueConf(0)
            setClickCount(0)
            setValueAssess([50])
            setBubble('Please move the slider')

        }
        else {
            if (canContinue) {
                addDoc(collection(db, "data"), {
                    canContinue,
                    imagePath,
                    valueConf
                })
                setImOrderInd(imOrderInd + 1);
                setImagePath('/' + partOrder[partInd] + '_' + imageOrder[imOrderInd + 1] + '_1' + '.png');
                setCaptionText('Click on image to see registration result');
                setCanContinue(false)
                setValueConf(0)
                setClickCount(0)
                setValueAssess([50])
                setBubble('Please move the slider')
            }
            else { alert("Please complete all fields in the right order!"); }
        }

    }

    const handleChangeSlider = (newValue) => {
        setValueAssess(newValue)

        if (newValue < 16.67) {
            setBubble('Strong reject')
        }
        else if (newValue >= 16.67 && newValue < 33.33) {
            setBubble('Moderate reject')
        }
        else if (newValue >= 33.33 && newValue < 50.00) {
            setBubble('Mild reject')
        }
        else if (newValue >= 50.00 && newValue < 66.67) {
            setBubble('Mild accept')
        }
        else if (newValue >= 66.67 && newValue < 83.34) {
            setBubble('Moderate accept')
        }
        else if (newValue >= 83.34) {
            setBubble('Strong accept')
        }
    }

    //For sanity check/debugging
    useEffect(() => {
        console.log('***********************')
        console.log('This is case #' + imOrderInd)
        console.log('Clickcount:' + clickcount)
        console.log('Current image:' + imagePath)
        console.log('Slider value: ' + valueAssess)
        console.log('Bubble: ' + bubble)
        console.log('User may continue:' + canContinue)
        console.log('part:' + partOrder[partInd])
        console.log('***********************')

    });



    return (

        <>
            {(!readExplanation) ?
                <>
                    <Explanation
                        partOrder={partOrder}
                        partInd={partInd}
                        imageOrder={imageOrder}
                        setImagePath={setImagePath}
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
                                <img className={styles.imageBorder} src={imagePath}></img>
                                <p className={styles.caption}>{captionText}</p>
                            </div>


                            <p className={styles.questions}>1) How would you assess this registration result?</p>

                            <Range
                                step={0.1}
                                min={0}
                                max={100}
                                values={valueAssess}
                                onChange={handleChangeSlider}
                                renderTrack={({ props, children }) => (
                                    <div className={styles.track}
                                        {...props}
                                        onMouseDown={props.onMouseDown}
                                        onTouchStart={props.onTouchStart}
                                        style={{ ...props.style }} class={styles.track}
                                    >
                                        {children}
                                    </div>
                                )}
                                renderThumb={({ props, isDragged }) => (
                                    <div className={styles.thumb}
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: '4vh',
                                            width: '4vh',
                                            borderRadius: '4px',
                                            backgroundColor: '#FFF',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            boxShadow: '0px 2px 6px #AAA'
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '10vw',
                                                height: '3vh',
                                                position: 'absolute',
                                                top: '-4vh',
                                                fontSize: '0.8vw',
                                                color: bubble != 'Please move the slider' ? 'black' : '#CCC',
                                                fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                                                textAlign: 'center',
                                                padding: '0.3vh',
                                                borderRadius: '4px',
                                                backgroundColor: '#fff',
                                                boxShadow: '0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2)'
                                            }}
                                        >
                                            {bubble}
                                        </div>
                                        <div
                                            style={{
                                                height: '2.5vh',
                                                width: '0.2vw',
                                                backgroundColor: isDragged ? 'black' : '#CCC'
                                            }}
                                        />
                                    </div>

                                )}
                            />

                            <ul>
                                <div className={styles.options}>
                                    <li>Strong reject</li>
                                    <li>Moderate reject</li>
                                    <li>Mild reject</li>
                                    <li>Mild accept</li>
                                    <li>Moderate accept</li>
                                    <li>Strong accept</li>
                                </div>
                            </ul>


                            <p className={styles.questions}>2) How confident are you on your assessment?</p>

                            <Buttons
                                valueConf={valueConf}
                                setValueConf={setValueConf}
                                clickcount={clickcount}
                                setCanContinue={setCanContinue}
                            />
                            <div className={styles.nextbutton_container}>
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
                                setReadExplanation={setReadExplanation}
                                setFinishAssess={setFinishAssess}
                                setAllDone={setAllDone}
                            />


                        </>


                    }
                </>
            }



        </>
    )
}

