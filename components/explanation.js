
import { Button, Radio, Checkbox, Row, Col } from 'antd'
import styles from '../styles/instruction.module.css'
import React, { useState } from 'react';



export default function Explanation({ partOrder, partInd, readExplanation, setReadExplanation }) {

    const continueChange = () => {
        setReadExplanation(true);

    }


    return (
        <>
            {(partOrder[partInd] == 0) ?
                <>
                    <div className={styles.container}>
                        <p>this is the explanation for part 0 </p>

                        <Button variant="btn btn-success" onClick={continueChange}>
                            Continue
        </Button>
                    </div>
                </>
                : (partOrder[partInd] == 1) ?
                    <>
                        <div className={styles.container}>
                            <p>this is the explanation for part 1 </p>
                            <Button variant="btn btn-success" onClick={continueChange}>
                                Continue
        </Button>
                        </div>
                    </>
                    :
                    <>
                        <div className={styles.container}>

                            <p>this is the explanation for part 2 </p>
                            <Button variant="btn btn-success" onClick={continueChange}>
                                Continue
        </Button>
                        </div>
                    </>


            }



        </>
    )




}