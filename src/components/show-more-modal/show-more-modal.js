import styles from "../show-more-modal/show-more-modal.module.css";
import CustomTabPanel from "../Shared/custom-tab-panel/custom-tab-panel";
import Rating from "../../assets/Rating.png";
import locatin from "../../assets/location.png";
import ModalCarousel from "../Shared/carousel/ModalCarousel";

const ShowMoreModal = ({ selectedCampper, isFromReview = false }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.insideModal}>
        <div>
          <h4 className={styles.title}>{selectedCampper?.name}</h4>
          <div className={styles.raiting}>
            <img alt="rating" src={Rating} />
            <a href="/">{selectedCampper?.rating} Reviews</a>
            <img alt="location" src={locatin} />
            <div>{selectedCampper?.location}</div>
          </div>
          <h4 className={styles.title}>${selectedCampper?.price}</h4>
        </div>
        <ModalCarousel images={selectedCampper.gallery} />
        <p className={styles.description}>{selectedCampper?.description}</p>
        <CustomTabPanel selectedCampper={selectedCampper} isFromReview={isFromReview} />
      </div>
    </div>
  );
};
export default ShowMoreModal;
