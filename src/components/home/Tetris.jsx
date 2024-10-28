import React from 'react'
import Game from '../.././assets/images/Tetris.png'
import styles from '../.././assets/styles/components/home/tetris.module.css'

export default function Tetris() {
  return (
    <div className='container'>
        <div className={styles.tetrisDiv}>
            <div className={styles.text}>
                <h1>Tetris</h1>
                <p>Try playing our game and tell us your opinion</p>
                <a href="https://holmweb-tetris.vercel.app/"><button>Play</button></a>
            </div>
            <div className={styles.pic}>
                <img src={Game} alt="" />
            </div>
        </div>
        
    </div>
  )
}
