import { React, useEffect, useState } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link'
import { db } from "../firebase";
import { collection, addDoc, orderBy, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useContext } from "react"
import AppContext from "../components/AppContext"

import {
    Form,
    Select,
    // Radio,
    // Input,
    Button,
    Radio,
} from 'antd';
import "antd/dist/antd.css";
import styles from '../styles/questionnaire.module.css'

const { Option } = Select;


const formItemLayout = {
    labelCol: {
        span: 22,
        offset: 1
    },
    wrapperCol: {
        span: 30,
        offset: 1
    },
};


export default function ShortSurvey({ partOrder, partInd, setPartInd, setReadExplanation, setFinishAssess, setAllDone, setImageOrder, setPoseOrder }) {
    const context = useContext(AppContext)

    let generate_order = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    const continueChange = (e) => {
        // e.preventDefault();

        if (partInd + 1 == partOrder.length) {
            setAllDone(true)
            console.log('Done with entire experimentation section')
        }
        else {
            setReadExplanation(false);
            setFinishAssess(false)
            setPartInd(partInd + 1);



        }
        // addDoc(collection(db, context.session), {
        //     part: partOrder[partInd],
        //     q1: Form.elements['name'].value,
        //     timestamp: serverTimestamp()
        // })

    }

    // const [form] = Form.useForm();
    // const [answers, setAnswers] = useState({});

    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    //     let copySaveArray = values
    //     setAnswers(values)

    //     // addDoc(collection(db, context.session), {
    //     //     part: partOrder[partInd],
    //     //     values,
    //     //     timestamp: serverTimestamp()
    //     // })
    //     window.scrollTo(0, 0);
    // };


    return (


        <div className={styles.container}>
            {/* <div className={styles.title}> Short survey</div>

            <div className={styles.text}> It was easy to understand how the visualization paradigm works. </div>

            <div className={styles.alignButtons}>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttons} onClick={() => onChangeConfidence(1)}></button>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttons} onClick={() => onChangeConfidence(2)}></button>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttons} onClick={() => onChangeConfidence(3)}></button>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttons} onClick={() => onChangeConfidence(4)}></button>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttons} onClick={() => onChangeConfidence(5)}></button>
                </div>
            </div>

            <ul>
                <div className={styles.options2}>
                    <li>Not at all</li>
                    <li>Slightly</li>
                    <li>Moderately</li>
                    <li>Very</li>
                    <li>Extremely</li>
                </div>
            </ul>
            <div className={styles.text}> It was easy to understand how the visualization paradigm works. </div>

            <div className={styles.alignButtons}>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttons} onClick={() => onChangeConfidence(1)}></button>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttons} onClick={() => onChangeConfidence(2)}></button>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttons} onClick={() => onChangeConfidence(3)}></button>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttons} onClick={() => onChangeConfidence(4)}></button>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttons} onClick={() => onChangeConfidence(5)}></button>
                </div>
            </div>

            <ul>
                <div className={styles.options2}>
                    <li>Not at all</li>
                    <li>Slightly</li>
                    <li>Moderately</li>
                    <li>Very</li>
                    <li>Extremely</li>
                </div>
            </ul> */}

            <div className={styles.buttonContainer}>
                <Button variant="btn btn-success" onClick={continueChange}>Continue</Button>
            </div>



        </div>


    )


}