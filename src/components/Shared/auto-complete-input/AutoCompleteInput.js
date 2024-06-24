import styles from "./AutoCompleteInput.module.css";
import locationIcon from "../../../assets/location_grey.png";

import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { onChangeLocation } from "../../../feature/filters/filters";

const AutoCompleteInput = () => {
  const dispatch = useDispatch();

  const onChangeLocations = (e) => {
    dispatch(onChangeLocation(e.target.value.toLowerCase()));
  };

  return (
    <div className={styles.container}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={onChangeLocations}
      />
      <img src={locationIcon} alt="Location" className={styles.icon} />
    </div>
  );
};

export default AutoCompleteInput;
