import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import LeftNavigation from "./leftNavigation";
import RightNavigation from "./rightNavigation";
import "swiper/css";

const Carousel = ({ data, componenetRender }) => {
  const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
      swiper.slideTo(0, null);
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    return <></>;
  };
  return (
    <div className={styles.wrapper}>
      <Swiper
        styles={{ padding: "0px 20px" }}
        initialSlide={0}
        slidePerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <LeftNavigation />
        <RightNavigation />

        {data.map((item) => {
          return <SwiperSlide>{componenetRender(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
