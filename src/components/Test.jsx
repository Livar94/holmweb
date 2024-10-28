import React from 'react'
import styles from './test.module.css'

export default function Test({ imgs }) {
  return (

  <div className={styles.buckets}>
    {imgs.map((img, i) => (<div key={i}><span>
        <img src={img} className={styles.img} alt="" />
    </span></div>))}
    
  </div>

  )
}
