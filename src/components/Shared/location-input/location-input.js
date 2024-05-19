// src/components/LocationInput.js
import styles from "./location-input.module.css"; // Import the CSS Module
import locationIcon from "../../../assets/location.png"; // Import the location icon

const LocationInput = () => {
  return (
    <div className={styles.locationInputContainer}>
      <input type="text" placeholder="City" className={styles.locationInput} />
      <img src={locationIcon} alt="Location" className={styles.locationIcon} />
    </div>
  );
};

export default LocationInput;
