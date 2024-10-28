import React from 'react'
import HolmLogo from '../../assets/images/holmlogo.png'
import styles from '../../assets/styles/components/layout/navbar.module.css'
import { useSidebar } from '../../context/useSidebar';
import { IoIosMenu } from 'react-icons/io';

export default function Navbar() {
  const { setIsOpen } = useSidebar();

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles['navbar-content']}> 
            <img src={HolmLogo} alt="" className={styles.logo} />
            <div className={styles.navlist}>
              <a href="/" className="active">Home</a>
              <a href="#email">Contact</a>
              <a href="#about">About</a>
            </div>

            <div className={styles.MenuBtn} onClick={() => setIsOpen(prev => !prev)}>
              <IoIosMenu />
            </div>
        </div>
     
        
      </div>
      
    </nav>
  )
}
