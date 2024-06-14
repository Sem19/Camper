import styles from "./custom-tab-panel.module.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Categories from "../categories/categories";
import MyForm from "../my-form/my-form";
import { Rating } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, selectedCampper, ...other } = props;
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
  selectedCampper: PropTypes.object,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ selectedCampper }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTab-root": {
              color: "#000000",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#e44848",
            },
          }}
        >
          <Tab label="Features" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div style={{ display: "flex" }}>
          <div>
            <Categories adults={selectedCampper?.adults} beds={selectedCampper?.details.beds} />
            <h4>Vehicle details</h4>
            <hr />
            <div>Form {selectedCampper?.form}</div>
            <div>Length:{selectedCampper?.length}</div>
            <div>Width {selectedCampper?.width}</div>
            <div>Height {selectedCampper?.height}</div>
            <div>Tank {selectedCampper?.tank}</div>
            <div>Consumption {selectedCampper?.consumption}</div>
          </div>
          <MyForm />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className={styles.CustomTabPanelContainer}>
          <div className={styles.Reviews}>
            {selectedCampper.reviews.map((el) => (
              <div key={el.id}>
                <div>
                  <div>
                    <Rating
                      name="half-rating-read"
                      value={parseFloat(el.reviewer_rating)}
                      precision={1}
                      readOnly
                    />
                    <div>{el.reviewer_name}</div>
                  </div>
                  <p>{el.comment}</p>
                </div>
              </div>
            ))}
          </div>
          <MyForm />
        </div>
      </CustomTabPanel>
    </Box>
  );
}