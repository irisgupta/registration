import styles from '../styles/experiment.module.css'
import React, { useEffect, useState } from "react";

export default function Buttons() {
    
    const confidenceScore = 0;

    const buttonOne = () => { 
      confidenceScore=1;
    }
    const buttonTwo = () => { 
      confidenceScore=2;
    }
    const buttonThree = () => { 
      confidenceScore=3;
    }
    const buttonFour = () => { 
      confidenceScore=4;
    }
    const buttonFive = () => { 
      confidenceScore=5;
    }

    return (   

      <div>

        <div className={styles.alignButtons}>
          <div className={styles.buttonContainer}>
            <button className={styles.buttons} onClick={buttonOne}></button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttons} onClick={buttonTwo}></button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttons} onClick={buttonThree}></button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttons} onClick={buttonFour}></button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttons} onClick={buttonFive}></button>
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