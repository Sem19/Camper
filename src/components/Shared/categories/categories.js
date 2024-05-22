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

const Categories = ({
  adults,
  transmission,
  ac,
  petrol,
  kitchen,
  beds,
  cd,
  radio,
  hob,
  toilet,
  shower,
  freezer,
  gas,
  water,
  microwave,
}) => {
  return (
    <div className={styles.categories}>
      <div>
        <img alt="adults" src={adultsImg} />
        {adults} adults
      </div>
      <div>
        <img alt="transmission" src={transmissionImg} />
        {transmission}
      </div>
      <div>
        <img alt="ac" src={airConditionerImg} />
        AC
      </div>
      <div>
        <img alt="petrol" src={petrolImg} />
        {petrol}
      </div>
      <div>
        <img alt="kitchen" src={kitchenImg} />
        kitchen
      </div>
      <div>
        <img alt="beds" src={bedsImg} />
        {beds} beds
      </div>
      {/* <div>
        <img alt="cd" src={cdImg} />
        CD: {cd}
      </div> */}
      {/* <div>
        <img alt="radio" src={radioImg} />
        Radio: {radio}
      </div>
      <div>
        <img alt="hob" src={hobImg} />
        Hob: {hob}
      </div>
      <div>
        <img alt="toilet" src={toiletImg} />
        Toilet: {toilet}
      </div>
      <div>
        <img alt="shower" src={showerImg} />
        Shower: {shower}
      </div>
      <div>
        <img alt="freezer" src={freezerImg} />
        Freezer: {freezer}
      </div>
      <div>
        <img alt="gas" src={gasImg} />
        Gas: {gas}
      </div>
      <div>
        <img alt="water" src={waterImg} />
        Water: {water}
      </div>
      <div>
        <img alt="microwave" src={microwaveImg} />
        Microwave: {microwave}
      </div> */}
    </div>
  );
};

export default Categories;
