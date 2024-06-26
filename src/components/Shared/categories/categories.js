import React from "react";
import styles from "./categories.module.css";
import adultsImg from "../../../assets/adults.png";
import transmissionImg from "../../../assets/transmissionS.png";
import airConditionerImg from "../../../assets/ac.png";
import petrolImg from "../../../assets/petrol.png";
import kitchenImg from "../../../assets/kitchenS.png";
import bedsImg from "../../../assets/beds.png";
import cdImg from "../../../assets/cd.png";
import radioImg from "../../../assets/radio.png";
import hobImg from "../../../assets/hob.png";
import toiletImg from "../../../assets/toilet.png";
import showerImg from "../../../assets/showerS.png";
import freezerImg from "../../../assets/freezer.png";
import gasImg from "../../../assets/gas.png";
import waterImg from "../../../assets/water.png";
import microwaveImg from "../../../assets/microwave.png";



const Categories = ({ el }) => {
  return (
    <div className={styles.categories}>
      <div>{el.adults} adults</div>
      <div>{el.transmission}</div>
      <div>{el.details.airConditioner} AC</div>
      <div>{el.engine}</div>
      <div>{el.details.kitchen}</div>
      <div>{el.details.beds} beds</div>
      <div>{el.details.CD}</div>
      <div>{el.details.Radio} Radio</div>
      <div>{el.details.hob} hob</div>
    </div>
  );
};
export default Categories;
