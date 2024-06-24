import styles from "./custom-tab-panel.module.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Categories from "../categories/categories";
import MyForm from "../my-form/my-form";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";

/* function CustomTabPanel(props) {
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
} */

const StyledTab = styled((props) => <Tab {...props} />)(({ theme, isloading }) => ({
  fontWeight: 600,
  fontSize: 20,
  fontFamily: "Inter",
  color: "#101828",
  "&.Mui-selected": {
    color: "#101828",
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ selectedCampper }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            TabIndicatorProps={{
              style: { background: "#E44848", height: "4px" },
            }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <StyledTab label="Features" value="1" />
            <StyledTab label="Reviews" value="2" />
          </TabList>
        </Box>

        <TabPanel sx={{ width: "100%", padding: 0 }} value="1">
          <div className={styles.CustomTabPanelContainer}>
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
          </div>
        </TabPanel>
        <TabPanel sx={{ padding: 0 }} value="2">
          <div className={styles.CustomTabPanelContainer}>
            <div className={styles.Reviews}>
              {selectedCampper.reviews.map((el, index) => (
                <div key={index}>
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
          </div>
        </TabPanel>
        <MyForm />
      </TabContext>
    </Box>
  );
}
