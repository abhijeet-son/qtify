import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import leftArrow from '../../assets/LeftArrow.png'
import styles from './Carousel.module.css';

const LeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() =>{
        swiper.on("slideChage", function(){
            setIsBeginning(swiper.isBeginning);
        })
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <img src={leftArrow} alt='left Arrow' onClick={() => swiper.slidePrev()}/> }
    </div>
  )
}
export default LeftNavigation;