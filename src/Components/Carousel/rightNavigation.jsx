import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import {ReactComponent as RightArrow} from '../../assets/RightArrow.jpg';
import rightArrow from '../../assets/RightArrow.jpg'
import styles from './Carousel.module.css';

const RightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() =>{
        swiper.on("slideChage", function(){
            setIsEnd(swiper.isEnd);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <img src={rightArrow} alt='Right Arrow' onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default RightNavigation;