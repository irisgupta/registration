import {React, useEffect, useState} from 'react';
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
        offset:1
    },
    wrapperCol: {
        span: 30,
        offset:1
    },
};


const Questionnaire = () => {
        const [form] = Form.useForm();
        const [answers, setAnswers] = useState({});
        // const history = useHistory();
        // let events = useSelector(state => state);
        // let dispatch = useDispatch();
      

    // const agree = true;

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

      const getData = (obj) => {
        // axios.post("https://human-ai-birds.herokuapp.com/birds",  JSON.stringify(obj),
        // { headers: { "Content-Type": "application/json; charset=UTF-8" }
        // }).then(response => {
        //     console.log(response.data);
        // })
    
      }

    return (

        <div className={styles.container}> 
        <div className={styles.title}> Post-study survey</div>        
        
        <div className={styles.text}> Please indicate your answer in a 5-point scale. </div>

        <Form.Item 
            name="i1" 
            label = {
                <p style={{fontSize: "20px"}}> 1. I love dangerous situations.</p>}
            rules={[{
                      required: true,
                    },
                  ]}>
            <Radio.Group>
                <Radio value="1">1 (very untrue of me)</Radio>
                <Radio value="2">2 (moderately untrue of me)</Radio>
                <Radio value="3">3 (neither true nor untrue of me)</Radio>
                <Radio value="4">4 (moderately true of me)</Radio>
                <Radio value="5">5 (very true of me)</Radio>
                </Radio.Group>
        </Form.Item>

        <Form.Item 
            name="i2" 
            label = {
                <p style={{fontSize: "20px"}}> 2. I like to do frightening things.</p>}
            rules={[{
                      required: true,
                    },
                  ]}>
            <Radio.Group>
                <Radio value="1">1 (very untrue of me)</Radio>
                <Radio value="2">2 (moderately untrue of me)</Radio>
                <Radio value="3">3 (neither true nor untrue of me)</Radio>
                <Radio value="4">4 (moderately true of me)</Radio>
                <Radio value="5">5 (very true of me)</Radio>
                </Radio.Group>
        </Form.Item>

        <Form.Item 
            name="i3" 
            label = {
                <p style={{fontSize: "20px"}}> 3. I get a thrill out of doing things that might kill me.</p>}
            rules={[{
                      required: true,
                    },
                  ]}>
            <Radio.Group>
                <Radio value="1">1 (very untrue of me)</Radio>
                <Radio value="2">2 (moderately untrue of me)</Radio>
                <Radio value="3">3 (neither true nor untrue of me)</Radio>
                <Radio value="4">4 (moderately true of me)</Radio>
                <Radio value="5">5 (very true of me)</Radio>
                </Radio.Group>
        </Form.Item>


        <Form.Item 
            name="i4" 
            label = {
                <p style={{fontSize: "20px"}}> 4. I would do anything to get an adrenaline rush.</p>}
            rules={[{
                      required: true,
                    },
                  ]}>
            <Radio.Group>
                <Radio value="1">1 (very untrue of me)</Radio>
                <Radio value="2">2 (moderately untrue of me)</Radio>
                <Radio value="3">3 (neither true nor untrue of me)</Radio>
                <Radio value="4">4 (moderately true of me)</Radio>
                <Radio value="5">5 (very true of me)</Radio>
                </Radio.Group>
        </Form.Item>

        <Form.Item 
            name="i5" 
            label = {
                <p style={{fontSize: "20px"}}> 5. I prefer safety over risk</p>}
            rules={[{
                      required: true,
                    },
                  ]}>
            <Radio.Group>
                <Radio value="1">1 (very untrue of me)</Radio>
                <Radio value="2">2 (moderately untrue of me)</Radio>
                <Radio value="3">3 (neither true nor untrue of me)</Radio>
                <Radio value="4">4 (moderately true of me)</Radio>
                <Radio value="5">5 (very true of me)</Radio>
                </Radio.Group>
        </Form.Item>
        
        
        <Form.Item 
            name="i6" 
            label = {
                <p style={{fontSize: "20px"}}> 6. What is your level of experience in medical imaging (i.e., in research or in your job)?</p>}
            rules={[{
                      required: true,
                    },
                  ]}>
            <Radio.Group>
                <Radio value="1">1 (novice)</Radio>
                <Radio value="2">2 (advanced beginner)</Radio>
                <Radio value="3">3 (competent)</Radio>
                <Radio value="4">4 (proficient)</Radio>
                <Radio value="5">5 (expert)</Radio>
                </Radio.Group>
        </Form.Item>

        <Form.Item 
            name="i7" 
            label = {
                <p style={{fontSize: "20px"}}> 7. What is your level of experience in image processing and analysis?</p>}
            rules={[{
                      required: true,
                    },
                  ]}>
            <Radio.Group>
                <Radio value="1">1 (novice)</Radio>
                <Radio value="2">2 (advanced beginner)</Radio>
                <Radio value="3">3 (competent)</Radio>
                <Radio value="4">4 (proficient)</Radio>
                <Radio value="5">5 (expert)</Radio>
                </Radio.Group>
        </Form.Item>
        
        
        
        
        <div className={styles.text}> Demographic questions</div>
        <Form {...formItemLayout} layout='vertical'
            name="validate_other"
            onFinish={onFinish}
            initialValues={{
            }}
        >

            <Form.Item 
                name="age" 
                label = {
                    <p style={{fontSize: "20px"}}> Age range</p>}
                rules={[{
                        required: true,
                        },
                    ]}>
                <Select>
                    <Select.Option value="1">18-24</Select.Option>
                    <Select.Option value="2">25-29</Select.Option>
                    <Select.Option value="3">30-34</Select.Option>
                    <Select.Option value="4">35-39</Select.Option>
                    <Select.Option value="5">40-44</Select.Option>
                    <Select.Option value="6">45-49</Select.Option>
                    <Select.Option value="7">50 or older</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item 
                name="gender" 
                label = {
                    <p style={{fontSize: "20px"}}> Gender</p>}
                rules={[{
                        required: true,
                        },
                    ]}>
                <Select 
                    allowClear
                >
                    <Select.Option value="male">male</Select.Option>
                    <Select.Option value="female">female</Select.Option>
                    <Select.Option value="none">prefer not to say</Select.Option>
                    <Select.Option value="other">other</Select.Option>
                </Select>
            </Form.Item>

            <div className={styles.text}> 
            <Link href= "/end" passHref>
         
                <Button component="a">
                    Submit
                </Button>
            </Link>
            </div> 

        </Form>
        
        </div>

    );
}

export default Questionnaire;