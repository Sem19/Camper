// src/components/LocationInput.js
import styles from "./location-input.module.css"; // Import the CSS Module
import locationIcon from "../../../assets/location_grey.png"; // Import the location icon
import locationIconDark from "../../../assets/location.png";
import { useState } from "react";

const LocationInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={styles.locationInputContainer}>
      <input
        type="text"
        placeholder="City"
        className={`${styles.locationInput} ${isFocused ? styles.focused : ""}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <img
        src={isFocused ? locationIconDark : locationIcon}
        alt="Location"
        className={styles.locationIcon}
      />
    </div>
  );
};

export default LocationInput;
