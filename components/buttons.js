import styles from '../styles/experiment.module.css'
import React, { useState } from 'react';

export default function Buttons (){

    const [confidenceScore, setConfidenceScore] = useState(0);

    return (   

      <div>

        <div className={styles.alignButtons}>
          <div className={styles.buttonContainer}>
            <button className={styles.buttons} onClick={() => setConfidenceScore(1)}></button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttons} onClick={() => setConfidenceScore(2)}></button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttons} onClick={() => setConfidenceScore(3)}></button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttons} onClick={() => setConfidenceScore(4)}></button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttons} onClick={() => setConfidenceScore(5)}></button>
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