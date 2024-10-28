import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../../assets/styles/components/layout/layout.module.css'
// import Pattern from '../../assets/images/pattern1.webp'
import { useRef } from 'react'
import CursorImg from '../../assets/images/lol.png'
import { useSidebar } from '../../context/useSidebar'
import { bubble as Menu } from 'react-burger-menu'
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  const { isOpen, setIsOpen } = useSidebar();

  const closeSidebar = () => setIsOpen(prev => !prev);

  const imgRef = useRef(null);

  function getImgPlaced (e) {
    imgRef.current.style.left = e.pageX + 'px';
    imgRef.current.style.top = e.pageY + 'px';
  }

  return (
    <div className={styles.layout} onMouseMove={getImgPlaced}>
            <div src={CursorImg} ref={imgRef} className={styles.imgCursor} />
            {isOpen && <div className={styles.MenuContainer}>
        <Menu isOpen={isOpen} onClose={ () => setIsOpen(false) } right styles={{
          bmMenu: {
            background: '#0F1654',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em',
            
          },
          bmMorphShape: {
            fill: '#0F1654'
          },
          bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
          },
          bmItem: {
            display: 'block',
            color: '#f1f1f1'
          },
        }}>
          <button className={styles.MenuBtn} onClick={() => setIsOpen(false)} ><IoIosClose /></button>

          
          <div className={styles.MenuLink} onClick={closeSidebar}>
            <Link to="/">Home</Link>
          </div>
          <div className={styles.MenuLink} onClick={closeSidebar}>
            <a href="#about">About</a>
          </div>
          <div className={styles.MenuLink} onClick={closeSidebar}>
            <a href="#email">Contact</a>
          </div>
          
        </Menu>
      </div>}
        <Navbar />
        {children}
        <Footer />
        {/* <img src={Pattern} alt="" className={styles.pattern} /> */}
    </div>
  )
}
