import styles from "./custom-tab-panel.module.css";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Categories from "../categories/categories";
import MyForm from "../my-form/my-form";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import avatar from "../../../assets/avatar.svg";

const StyledTab = styled((props) => <Tab {...props} />)(({ theme, isloading }) => ({
  fontWeight: 600,
  fontSize: 20,
  fontFamily: "Inter",
  color: "#101828",
  "&.Mui-selected": {
    color: "#101828",
  },
}));

export default function CustomTabPanel({ selectedCampper, isFromReview }) {
  const [value, setValue] = useState(isFromReview ? "2" : "1");

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
        <div className={styles.CustomTabPanelContainer}>
          <TabPanel sx={{ padding: 0, maxWidth: 450, width: "100%" }} value="1">
            <div className={styles.Parametrs}>
              <div className={styles.titleParametrs}>
                <Categories el={selectedCampper} key={selectedCampper._id} />
                <h4 className={styles.vehicle_details}>Vehicle details</h4>
                <hr />
                <div className={styles.parametrsDiscription}>
                  <div>
                    <span className={styles.paramName}>Form:</span> {selectedCampper?.form}
                  </div>
                  <div>
                    <span className={styles.paramName}>Length:</span> {selectedCampper?.length}
                  </div>
                  <div>
                    <span className={styles.paramName}>Width:</span> {selectedCampper?.width}
                  </div>
                  <div>
                    <span className={styles.paramName}>Height:</span> {selectedCampper?.height}
                  </div>
                  <div>
                    <span className={styles.paramName}>Tank:</span> {selectedCampper?.tank}
                  </div>
                  <div>
                    <span className={styles.paramName}>Consumption:</span>{" "}
                    {selectedCampper?.consumption}
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel sx={{ padding: 0, maxWidth: 450, width: "100%" }} value="2">
            <div className={styles.Reviews}>
              <div>
                {selectedCampper.reviews.map((el, index) => (
                  <div key={index}>
                    <div>
                      <div className={styles.reviewer_field}>
                        <img
                          width={60}
                          height={60}
                          alt="location"
                          src={avatar}
                          className={styles.reviewer_avatar}
                        />
                        <h2 className={styles.letter}>{el.reviewer_name[0]}</h2>
                        <div className={styles.reviewer_rating}>
                          <div>{el.reviewer_name}</div>
                          <Rating
                            name="half-rating-read"
                            value={parseFloat(el.reviewer_rating)}
                            precision={1}
                            readOnly
                          />
                        </div>
                      </div>
                      <p className={styles.comment}>{el.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
          <MyForm />
        </div>
      </TabContext>
    </Box>
  );
}
