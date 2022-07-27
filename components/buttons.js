import styles from '../styles/experiment.module.css'
import React from 'react';

export default function Buttons() {
    const storeButtonValue = (e) => {
        e.preventDefault();
        return(e.currentTarget.id);
      }

    return (
        
      <div>
        <div className={styles.buttonsContainer}>
          <button className={styles.buttons} id="one" onClick={storeButtonValue}></button>
          <button className={styles.buttons} id="two" onClick={storeButtonValue}></button>
          <button className={styles.buttons} id="three" onClick={storeButtonValue}></button>
          <button className={styles.buttons} id="four" onClick={storeButtonValue}></button>
          <button className={styles.buttons} id="five" onClick={storeButtonValue}></button>
        </div>
        {/* <script>alert(buttonValue)</script> */}
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