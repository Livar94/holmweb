import React, { useState } from 'react'

import styles from '../../assets/styles/components/home/work.module.css'
import PalmSmoke from '../../assets/images/Palm Smoke & Vape Shop.png'
import JoelleAcademy from '../../assets/images/Joelle Academy.png'
import NFT from '../../assets/images/Bored Bunny.png'
import Qrifo from '../../assets/images/qrifo - info brought to you with QR code.png'
import { Link } from 'react-router-dom'

export default function Work() {
  const [hover, setHover] = useState(false);

  const ourWork = [
    {
      id: "palm1",
      name: 'Palm Smoke & Vape Shop',
      domain: "https://www.palmsmokevapeshop.com",
      description: "Hello world",
      image: PalmSmoke
    },
    {
      id: "joelle1",
      name: 'JoelleAcademy',
      domain: "https://joelleacademy.net/",
      description: "Hello world",
      image: JoelleAcademy
    },
    {
      id: "qrifo1",
      name: 'Qrifo',
      domain: "https://qrifo-2459a.web.app/",
      description: "Hello world",
      image: Qrifo
    },
    {
      id: "bored1",
      name: 'Bored Bunny Clone',
      domain: "http://nft-bored-bunny.vercel.app/",
      description: "Hello world",
      image: NFT
    }
  ]

  return (
    <section>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>Projects</h2>
          </div>
          <div className={styles.workList}>
            {ourWork.map(work => (<div className={styles.work} onMouseOver={e => setHover(work.id)} onMouseLeave={e => setHover(0)} key={work.id}>
              <img src={work.image} alt="" />
              {hover === work.id && (
                <a href={work.domain}>
                <div className={styles.workInfo}>
                  <h3>{work.name}</h3>
                
                  <p>{work.description}</p>
                </div>
                </a>
              )}

            </div>))}
          </div>
        </div>
      </div>
    </section>
  )
}
