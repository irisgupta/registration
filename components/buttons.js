import styles from '../styles/experiment.module.css'
import React, { useState } from 'react';

export default function Buttons({ valueConf, setValueConf, clickcount, setCanContinue }) {

    function onChangeConfidence(val) {
        console.log('radio checked', val);
        setValueConf(val);
        if (clickcount > 0) {
            setCanContinue(true)
        }
    };

    return (

        <div>

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
                <div className={styles.options}>
                    <li>Not at all</li>
                    <li>Slightly</li>
                    <li>Moderately</li>
                    <li>Very</li>
                    <li>Extremely</li>
                </div>
            </ul>
        </div>
    )
}