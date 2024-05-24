import styles from "./custom-tab-panel.module.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Categories from "../categories/categories";
import MyForm from "../my-form/MyForm";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Features" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div style={{ display: "flex" }}>
          <div>
            <Categories />
            <h4>Vehicle details</h4>
            <div>Form</div>
            <div>Length</div>
            <div>Width</div>
            <div>Height</div>
            <div>Tank</div>
            <div>Consumption</div>
          </div>
          <h4>react hook form</h4>
          <MyForm />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div>
          {/* <h4>Rating: {details.rating}</h4>
          {reviews.map((review, index) => (
            <div key={index}>
              <strong>{review.reviewer_name}</strong>
              <p>Rating: {review.reviewer_rating}</p>
              <p>{review.comment}</p>
            </div>
          ))} */}
        </div>
      </CustomTabPanel>
    </Box>
  );
}
