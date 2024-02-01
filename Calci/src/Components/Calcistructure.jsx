import React, { useState } from 'react'
import styles from './CalciStru.module.css'
import Results from './Results'
import Buttons from './Buttons'
export default function Calcistructure() {
    const [exp,setExp]=useState("");
  return (
    <div className={styles.container}>
      <h1>Welcome to React Calculator</h1>
      <div className={styles.box}>
        <br />
        <br />
        <Results exp={exp} setexp={setExp}></Results>
        <Buttons  exp={exp} setexp={setExp}></Buttons>
      </div>
    </div>
  )
}
