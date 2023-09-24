import React, { useState } from "react";
import styles from "./section.module.css";
import { CircularProgress } from "@mui/material";
import Cards from "../Cards/Cards";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/tabs";

const Section = ({ title, data, type, value = 0, handleChange = null}) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggelText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "collapse All"}
        </h4>
      </div>
      {type === "song" ? <BasicTabs value={value} handleChange={handleChange} />: null}
      {!data?.length ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Cards key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              componenetRender={(ele) => <Cards data={ele} type= {type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
