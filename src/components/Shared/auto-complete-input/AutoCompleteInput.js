import styles from "./AutoCompleteInput.module.css";
import locationIcon from "../../../assets/location_black.svg";

import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { onChangeLocation } from "../../../feature/filters/filters";
import { InputAdornment } from "@mui/material";

const AutoCompleteInput = () => {
  const dispatch = useDispatch();

  const onChangeLocations = (e) => {
    dispatch(onChangeLocation(e.target.value.toLowerCase()));
  };

  return (
    <div className={styles.container}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        onChange={onChangeLocations}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img
                width={18}
                height={20}
                src={locationIcon}
                alt="Location"
                className={styles.icon}
              />
            </InputAdornment>
          ),
        }}
        className={styles.textField}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray",
            },
            "&:hover fieldset": {
              borderColor: "gray",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#e44848",
            },
          },
        }}
      />
    </div>
  );
};

export default AutoCompleteInput;
