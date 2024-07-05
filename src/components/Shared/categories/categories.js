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
      {el.adults ? (
        <div>
          <img src={adultsImg} alt="adults" /> {el.adults} adults
        </div>
      ) : null}
      {el.transmission ? (
        <div>
          <img src={transmissionImg} alt="transmission" /> {el.transmission}
        </div>
      ) : null}
      {el.details.airConditioner ? (
        <div>
          <img src={airConditionerImg} alt="AC" /> AC
        </div>
      ) : null}
      {el.engine ? (
        <div>
          <img src={petrolImg} alt="engine" /> {el.engine}
        </div>
      ) : null}
      {el.details.kitchen ? (
        <div>
          <img src={kitchenImg} alt="kitchen" /> kitchen
        </div>
      ) : null}
      {el.details.beds ? (
        <div>
          <img src={bedsImg} alt="beds" /> {el.details.beds} beds
        </div>
      ) : null}
      {el.details.CD ? (
        <div>
          <img src={cdImg} alt="CD" /> CD
        </div>
      ) : null}
      {el.details.Radio ? (
        <div>
          <img src={radioImg} alt="Radio" /> {el.details.Radio} Radio
        </div>
      ) : null}
      {el.details.hob ? (
        <div>
          <img src={hobImg} alt="hob" /> {el.details.hob} hob
        </div>
      ) : null}
      {el.details.toilet ? (
        <div>
          <img src={toiletImg} alt="toilet" /> Toilet
        </div>
      ) : null}
      {el.details.shower ? (
        <div>
          <img src={showerImg} alt="shower" /> {el.details.shower} shower
        </div>
      ) : null}
      {el.details.freezer ? (
        <div>
          <img src={freezerImg} alt="freezer" /> Freezer
        </div>
      ) : null}
      {el.details.gas ? (
        <div>
          <img src={gasImg} alt="gas" /> {el.details.gas} gas
        </div>
      ) : null}
      {el.details.water ? (
        <div>
          <img src={waterImg} alt="water" /> {el.details.water} water
        </div>
      ) : null}
      {el.details.microwave ? (
        <div>
          <img src={microwaveImg} alt="microwave" /> Microwave
        </div>
      ) : null}
    </div>
  );
};

export default Categories;
