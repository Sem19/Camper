import { useState } from "react";
import styles from "./filter.module.css";
import airConditioner from "../../assets/airConditioner.png";
import airConditioner2 from "../../assets/airConditioner2.png";
import transmission from "../../assets/transmission.png";
import transmission2 from "../../assets/transmission2.png";
import kitchen from "../../assets/kitchen.png";
import kitchen2 from "../../assets/kitchen2.png";
import tv from "../../assets/TV.png";
import tv2 from "../../assets/TV2.png";
import shower from "../../assets/shower.png";
import shower2 from "../../assets/shower2.png";
import van from "../../assets/van.png";
import van2 from "../../assets/van2.png";
import integrate from "../../assets/integrate.png";
import integrate2 from "../../assets/integrate2.png";
import alcove from "../../assets/alcove.png";
import alcove2 from "../../assets/alcove2.png";
import AutoCompleteInput from "../Shared/auto-complete-input/AutoCompleteInput";
import { useDispatch, useSelector } from "react-redux";
import { onChangeCampperType, onChangeEquipment } from "../../feature/filters/filters";
import ClassNames from "classnames";

const Filter = () => {
  const dispatch = useDispatch();
  const { type, equipment } = useSelector((state) => state.filter);
  const [highlightedButtons, setHighlightedButtons] = useState([]);

  const images = [
    {
      id: 1,
      value: "airConditioner",
      images: [airConditioner, airConditioner2],
      alt: ["air conditioner", "air conditioner2"],
    },
    {
      id: 2,
      value: "automatic",
      images: [transmission, transmission2],
      alt: ["transmission", "transmission2"],
    },
    { id: 3, value: "kitchen", images: [kitchen, kitchen2], alt: ["kitchen", "kitchen2"] },
    { id: 4, value: "TV", images: [tv, tv2], alt: ["tv", "tv2"] },
    { id: 5, value: "shower", images: [shower, shower2], alt: ["shower", "shower2"] },
    { id: 6, value: "panelTruck", images: [van, van2], alt: ["van", "van2"] },
    {
      id: 7,
      value: "fullyIntegrated",
      images: [integrate, integrate2],
      alt: ["integrate", "integrate2"],
    },
    { id: 8, value: "alcove", images: [alcove, alcove2], alt: ["alcove", "alcove2"] },
  ];
  /* 
  const handleButtonClick = (buttonId, value) => {
    const index = highlightedButtons.indexOf(buttonId);
    if (index !== -1) {
      setHighlightedButtons((prevState) => prevState.filter((id) => id !== buttonId));
    } else {
      setHighlightedButtons((prevState) => [...prevState, buttonId]);
    }
    dispatch(toggleEquipment(value));
    console.log(value);
  }; */

  const onChangeEquipments = (value) => {
    if (equipment.includes(value)) {
      dispatch(onChangeEquipment(equipment.filter((el) => el !== value)));
    } else dispatch(onChangeEquipment([...equipment, value]));
  };

  const onChangeType = (value) => {
    dispatch(onChangeCampperType(value));
  };

  return (
    <div className={styles.filters}>
      <div>
        <div>Location</div>
        <AutoCompleteInput />
      </div>
      <div>
        <div>Filters</div>
        <div>
          <h3>Vehicle equipment</h3>
          <hr />
          <div className={styles.buttonContainer}>
            {images.slice(0, 5).map((imageSet) => (
              <button
                key={imageSet.id}
                value={imageSet.value}
                className={ClassNames(
                  styles.button,
                  equipment.includes(imageSet.value) ? styles.highlighted : null,
                )}
                onClick={() => onChangeEquipments(imageSet.value)}
              >
                <div className={styles.inside}>
                  {imageSet.images.map((src, index) => (
                    <img key={index} src={src} alt={imageSet.alt[index]} />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3>Vehicle type</h3>
          <hr />
          <div className={styles.buttonContainer}>
            {images.slice(5, 8).map((imageSet) => (
              <button
                key={imageSet.id}
                value={imageSet.value}
                className={ClassNames(
                  styles.button,
                  type === imageSet.value ? styles.highlighted : null,
                )}
                onClick={() => onChangeType(imageSet.value)}
              >
                <div className={styles.inside}>
                  {imageSet.images.map((src, index) => (
                    <img key={index} src={src} alt={imageSet.alt[index]} />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* <button>Search</button> */}
    </div>
  );
};

export default Filter;
