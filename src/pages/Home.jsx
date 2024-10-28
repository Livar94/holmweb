
import About from '../components/home/About'
import Hero from '../components/home/Hero'
import Offer from '../components/home/Offer'
import Work from '../components/home/Work'
import styles from '../assets/styles/pages/home.module.css'
import { useRef } from 'react'
import ContactUs from '../components/home/ContactUs'
import Tetris from './../components/home/Tetris';


export default function Home() {
  const starsRef = useRef(null)

  const moveStars = (e) => {
    // starsRef.current.style.left = e.pageX - document.body.clientWidth/2 + 'px';
    // starsRef.current.style.top = e.pageY - document.body.clientHeight/2 + 'px';
    starsRef.current.style.transform = `skew(${(e.pageX - document.body.clientWidth/2)/100}deg, ${(e.pageY - document.body.clientHeight/2)/100}deg)`
  }

  return (
    
    <main className={styles.home} onMouseMove={moveStars}>
       
       <div className={styles.starsContainer} ref={starsRef}>
<div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
       </div>
       

        <div className={styles.title}></div>
      <div className='container'>
        <div className={styles.hero}>
          <Hero />
        </div>
      </div>
      
      
      
      <Offer />
      <Work />
      <About />
      <Tetris />
      <ContactUs />
    </main>
  )
}
