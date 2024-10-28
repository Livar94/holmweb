import React from 'react'
import styles from '../../assets/styles/components/home/hero.module.css'
import WebDevImg from '../../assets/images/—Pngtree—web development illustration modern_4461019.png'
// import ConnectedImg from '../../assets/images/PngItem_700567.png'
// import ConniferImg from '../../assets/images/conifer-browser-window-7.png'
// import CpuImg from '../../assets/images/949610-CPU-tech-circuit-circuit-boards-computer-technology.jpg'
import Typewriter from 'typewriter-effect';


export default function Hero({scrollToContact }) {
  return (
    <section>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.text}>
              
              <h1>
                <Typewriter
                  options={{
                    strings: ['Swedish web agency.'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p>We are a team of web & app developers based in Sweden, we're able to create different types of appplications and websites. We use different technologies, all based on what's best for you or what your preference is.</p>
              <button onClick={scrollToContact}>Contact us</button>
             
            </div>
            <div className={styles.imageContainer}>
              <img src={WebDevImg} alt="" className={styles.imgOne} />
{/*               <img src={ConnectedImg} alt="" className={styles.imgTwo} />
              <img src={ConniferImg} alt="" className={styles.imgThree} />
              <img src={CpuImg} alt="" className={styles.imgFour} /> */}
            </div>
          </div>
          
        </div>
    </section>
  )
}
