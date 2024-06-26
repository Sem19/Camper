import styles from "../catalog-page/catalog-page.module.css";
import CustomTabPanel from "../Shared/custom-tab-panel/custom-tab-panel";
import Rating from "../../assets/Rating.png";
import locatin from "../../assets/location.png";

const ShowMoreModal = ({ selectedCampper }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.insideModal}>
        <div>
          <h4>{selectedCampper?.name}</h4>
          <div className={styles.raiting}>
            <img alt="rating" src={Rating} />
            <a href="/">{selectedCampper?.rating} Reviews</a>
            <img alt="location" src={locatin} />
            <div>{selectedCampper?.location}</div>
          </div>
          <h4>${selectedCampper?.price}</h4>
        </div>
        <div className={styles.modalImages}>
          <img width={240} height={260} alt="img" src={selectedCampper?.gallery[0]} />
          <img width={240} height={260} alt="img" src={selectedCampper?.gallery[1]} />
          <img width={240} height={260} alt="img" src={selectedCampper?.gallery[2]} />
        </div>
        <p>{selectedCampper?.description}</p>
        <CustomTabPanel selectedCampper={selectedCampper} />
      </div>
    </div>
  );
};
export default ShowMoreModal;
