import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { onChangePrice } from "../../../feature/filters/filters";
import styles from "../castom-marks/CastomMarks.module.css";

const MAX = 100000;
const MIN = 0;

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);
  const [inputMin, setInputMin] = React.useState(MIN.toString());
  const [inputMax, setInputMax] = React.useState(MAX.toString());
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setInputMin(newValue[0].toString());
    setInputMax(newValue[1].toString());
  };

  const handleInputChange = (event, inputType) => {
    const newValue = event.target.value === "" ? "" : Number(event.target.value);
    if (inputType === "min") {
      setInputMin(newValue.toString());
      setValue([newValue, value[1]]);
    } else if (inputType === "max") {
      setInputMax(newValue.toString());
      setValue([value[0], newValue]);
    }
  };

  const handleBlur = (inputType) => {
    if (inputType === "min" && inputMin === "") {
      setInputMin(MIN.toString());
    } else if (inputType === "max" && inputMax === "") {
      setInputMax(MAX.toString());
    }
  };

  const handleOkClick = () => {
    dispatch(onChangePrice(value));
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={value}
        onChange={handleChange}
        min={MIN}
        max={MAX}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        className={styles.slider}
      />
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Input
          value={inputMin}
          margin="dense"
          onChange={(e) => handleInputChange(e, "min")}
          onBlur={() => handleBlur("min")}
          classes={{
            root: styles.inputFocused,
            underline: styles.inputUnderline,
          }}
          inputProps={{
            step: 500,
            min: MIN,
            max: MAX,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
          sx={{ mr: 2 }}
        />
        <Input
          value={inputMax}
          margin="dense"
          onChange={(e) => handleInputChange(e, "max")}
          onBlur={() => handleBlur("max")}
          classes={{
            root: styles.inputFocused,
            underline: styles.inputUnderline,
          }}
          inputProps={{
            step: 2500,
            min: MIN,
            max: MAX,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
          sx={{ mr: 2 }}
        />
        <button onClick={handleOkClick} style={{ marginLeft: "auto" }}>
          OK
        </button>
      </Box>
    </Box>
  );
}
