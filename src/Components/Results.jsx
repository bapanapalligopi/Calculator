import React from 'react'
import styles from './results.module.css'

export default function Results({exp,setexp}) {
    
  return (
    <div className={styles.results}>
     {exp}
    </div>
  )
}
