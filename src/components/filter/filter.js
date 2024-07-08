import styles from "./filter.module.css";
import airConditioner from "../../assets/airConditioner.png";
import toilet from "../../assets/toilet.png";
import freezer from "../../assets/freezer.png";
import transmission from "../../assets/transmission.png";
import automatic from "../../assets/automatic.png";
import kitchen from "../../assets/kitchen.png";
import tv from "../../assets/TV.png";
import shower from "../../assets/shower.png";
import van from "../../assets/van.png";
import integrate from "../../assets/integrate.png";
import alcove from "../../assets/alcove.png";
import AutoCompleteInput from "../Shared/auto-complete-input/AutoCompleteInput";
import { useDispatch, useSelector } from "react-redux";
import {
  onChangeCampperTransmission,
  onChangeCampperType,
  onChangeEquipment,
} from "../../feature/filters/filters";
import ClassNames from "classnames";
import CustomMarks from "../Shared/castom-marks/CastomMarks";

const images = [
  { id: 1, value: "airConditioner", image: airConditioner, alt: "AC" },
  { id: 2, value: "freezer", image: freezer, alt: "freezer" },
  { id: 3, value: "kitchen", image: kitchen, alt: "kitchen" },
  { id: 4, value: "TV", image: tv, alt: "tv" },
  { id: 5, value: "shower", image: shower, alt: "shower" },
  { id: 6, value: "toilet", image: toilet, alt: "toilet" },
  { id: 7, value: "panelTruck", image: van, alt: "van" },
  { id: 8, value: "fullyIntegrated", image: integrate, alt: "integrate" },
  { id: 9, value: "alcove", image: alcove, alt: "alcove" },
  { id: 10, value: "automatic", image: automatic, alt: "automatic" },
  { id: 11, value: "manuel", image: transmission, alt: "manuel" },
];

const Filter = () => {
  const dispatch = useDispatch();
  const { type, transmission, equipment, price } = useSelector((state) => state.filter);

  const onChangeEquipments = (value) => {
    if (equipment.includes(value)) {
      dispatch(onChangeEquipment(equipment.filter((el) => el !== value)));
    } else dispatch(onChangeEquipment([...equipment, value]));
  };

  const onChangeType = (value) => {
    dispatch(onChangeCampperType(value));
  };

  const onChangeTransmission = (value) => {
    dispatch(onChangeCampperTransmission(value));
  };

  return (
    <div className={styles.filters}>
      <div>
        <div className={styles.small_title}>Location</div>
        <AutoCompleteInput />
      </div>
      <div>
        <div className={styles.small_title}>Filters</div>
        <div>
          <h3 className={styles.title}>Vehicle equipment</h3>
          <hr />
          <div className={styles.buttonContainer}>
            {images.slice(0, 6).map((imageSet) => (
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
                  <img src={imageSet.image} alt={imageSet.alt} />
                  <div>{imageSet.alt}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className={styles.title}>Vehicle type</h3>
          <hr />
          <div className={styles.buttonContainer}>
            {images.slice(6, 9).map((imageSet) => (
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
                  <img src={imageSet.image} alt={imageSet.alt} />
                  <div>{imageSet.alt}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className={styles.title}>Transmission</h3>
          <hr />
          <div className={styles.buttonContainer}>
            {images.slice(9, 11).map((imageSet) => (
              <button
                key={imageSet.id}
                value={imageSet.value}
                className={ClassNames(
                  styles.button,
                  transmission === imageSet.value ? styles.highlighted : null,
                )}
                onClick={() => onChangeTransmission(imageSet.value)}
              >
                <div className={styles.inside}>
                  <img src={imageSet.image} alt={imageSet.alt} />
                  <div>{imageSet.alt}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <h3 className={styles.title}>Price</h3>
        <hr />
        <div className={styles.price}>
          <CustomMarks className={styles.custom_marks} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
