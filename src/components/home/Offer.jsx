import React from 'react'
import styles from '../../assets/styles/components/home/offer.module.css'
import Img1 from '../../assets/images/offer/css3_logo.png'
import Img2 from '../../assets/images/offer/html_logo.png'
import Img3 from '../../assets/images/offer/javascript_logo.png'
import Img4 from '../../assets/images/offer/React-icon.svg.png'
import Img5 from '../../assets/images/offer/wordpress_logo.png'
import Img6 from '../../assets/images/offer/vue_logo.png'
import Img7 from '../../assets/images/offer/angular_logo.png'
import Img8 from '../../assets/images/offer/adobe_XD.png'
import Test from '../Test'


export default function Offer() {
  const imgs = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8
  ];

  return (
    <section id="about" className='container'>
      <div  className={styles.WhatWeOffer}>
        <div className={styles.content}>
          <div className={styles['img-container']}>
            <Test imgs={imgs} />
          </div>
          <div className={styles.text}>
            <h2>What we offer</h2>
            <p>We are able to create all sorts of websites, web applications and blogs. <br /> Whether it's a Single Page Application or a regular website, we go it.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
