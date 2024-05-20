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
import LocationIput from "../Shared/location-input/location-input";

const Filter = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [highlightedButtons, setHighlightedButtons] = useState([]);

  const images = [
    {
      id: 1,
      images: [airConditioner, airConditioner2],
      alt: ["air conditioner", "air conditioner2"],
    },
    { id: 2, images: [transmission, transmission2], alt: ["transmission", "transmission2"] },
    { id: 3, images: [kitchen, kitchen2], alt: ["kitchen", "kitchen2"] },
    { id: 4, images: [tv, tv2], alt: ["tv", "tv2"] },
    { id: 5, images: [shower, shower2], alt: ["shower", "shower2"] },
    { id: 6, images: [van, van2], alt: ["van", "van2"] },
    { id: 7, images: [integrate, integrate2], alt: ["integrate", "integrate2"] },
    { id: 8, images: [alcove, alcove2], alt: ["alcove", "alcove2"] },
  ];

  const handleButtonClick = (buttonId) => {
    const index = highlightedButtons.indexOf(buttonId);
    if (index !== -1) {
      setHighlightedButtons((prevState) => prevState.filter((id) => id !== buttonId));
    } else {
      setHighlightedButtons((prevState) => [...prevState, buttonId]);
    }
  };

  return (
    <div className={styles.filters}>
      <div>
        <div>Location</div>
        <LocationIput />
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
                className={
                  highlightedButtons.includes(imageSet.id)
                    ? `${styles.button} ${styles.highlighted}`
                    : styles.button
                }
                onClick={() => handleButtonClick(imageSet.id)}
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
                className={
                  highlightedButtons.includes(imageSet.id)
                    ? `${styles.button} ${styles.highlighted}`
                    : styles.button
                }
                onClick={() => handleButtonClick(imageSet.id)}
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
      <button>Search</button>
    </div>
  );
};

export default Filter;
