import React from 'react'
import styles from './hero.module.css';
import Headphone from '../../assets/vibrating-headphone 1.png';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
        <div className={styles.imageSection}>
        <h1 className={styles.bannerText}>100 Thousands Songs, ad-free over thousands podcast episodes</h1>
        <img src={Headphone} alt="headphoneImage" />
        </div>
    </div>
  )
}

export default HeroSection