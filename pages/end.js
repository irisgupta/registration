import React, { Component,useState } from "react";
import styles from '../styles/end.module.css'
import { useSelector, useDispatch } from "react-redux";

function End() {
//    let events = useSelector(state => state);


    return (
      <div className={styles.container}>
        <div className={styles.title}>
        <h1>Thank you for completing the study! </h1>

          <div style={{marginTop:"10px", fontSize:"18px", marginLeft:"25%", marginRight:"25%"}}>
            Please copy this code into the box in the starter page to complete the study.
          </div>
          <div className={styles.box}> 
                {/* {events.userId} */}
          </div>

      </div>
      </div>
      );
}

export default End;