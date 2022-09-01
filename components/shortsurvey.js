import { React, useEffect, useState } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link'

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


export default function ShortSurvey({ partOrder, partInd, setPartInd, readExplanation, setReadExplanation, finishAccess, setFinishAccess, imOrderInd, setImOrderInd, canContinue, setCanContinue, allDone, setAllDone }) {

    const continueChange = (e) => {
        e.preventDefault();

        if (partInd + 1 == partOrder.length) {
            setAllDone(true)
            console.log('Done with entire experimentation section')
        }
        else {
            setReadExplanation(false);
            setFinishAccess(false)
            setPartInd(partInd + 1)
            setImOrderInd(0)
            setCanContinue(false)


            //HERE add setImagepath if part done going over next part?
            // setimagePath('/' + partOrder[partInd] + '_' + imageOrder[imOrderInd + 1] + '_1' + '.png');

        }

    }

    const [form] = Form.useForm();
    const [answers, setAnswers] = useState({});

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        let copySaveArray = values
        setAnswers(values)

        let studyTime = ((Date.now() - events.totalTime) / 1000).toFixed(3)
        // getData({'userID': events.userId,
        //          'total_time': studyTime,
        //          'demographics': events.demo,
        //          'responses': events.responses,
        //          'survey': copySaveArray})
        let path = '/end';
        window.location.assign(path);
        // history.push(path);
        window.scrollTo(0, 0);
    };


    return (


        <div className={styles.container}>
            <div className={styles.title}> Short survey</div>

            <div className={styles.text}> Please indicate your answer in a 5-point scale. </div>

            <Form {...formItemLayout} layout='vertical'
                name="validate_other"
                onFinish={onFinish}
                initialValues={{
                }}
            >
                <Form.Item
                    name="s1"
                    label={
                        <p style={{ fontSize: "20px" }}> It was easy to understand how the visualization paradigm works. </p>}
                    rules={[{
                        required: true,
                    },
                    ]}>
                    <Radio.Group>
                        <Radio value="1">1 (Not at all)</Radio>
                        <Radio value="2">2 (Slightly)</Radio>
                        <Radio value="3">3 (Moderately)</Radio>
                        <Radio value="4">4 (Very)</Radio>
                        <Radio value="5">5 (Extremely)</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name="s2"
                    label={
                        <p style={{ fontSize: "20px" }}> It was difficult to assess the alignment with this visualization paradigm. </p>}
                    rules={[{
                        required: true,
                    },
                    ]}>
                    <Radio.Group>
                        <Radio value="1">1 (Not at all)</Radio>
                        <Radio value="2">2 (Slightly)</Radio>
                        <Radio value="3">3 (Moderately)</Radio>
                        <Radio value="4">4 (Very)</Radio>
                        <Radio value="5">5 (Extremely)</Radio>
                    </Radio.Group>
                </Form.Item>

                <div className={styles.buttonContainer}>
                    <Button variant="btn btn-success" onClick={continueChange}>Submit</Button>
                </div>
            </Form>


        </div>


    )


}