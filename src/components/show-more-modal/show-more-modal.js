// import styles from "../catalog-page/catalog-page.module.css";
import styles from "../show-more-modal/show-more-modal.module.css";
import CustomTabPanel from "../Shared/custom-tab-panel/custom-tab-panel";
import Rating from "../../assets/Rating.png";
import locatin from "../../assets/location.png";
import ImageGallery from "../Shared/carousel/ImageGallery";

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
        {/* <div className={styles.modalImages}>
          <img width={290} height={310} alt="img" src={selectedCampper?.gallery[0]} />
          <img width={290} height={310} alt="img" src={selectedCampper?.gallery[1]} />
          <img width={290} height={310} alt="img" src={selectedCampper?.gallery[2]} />
        </div> */}
        <ImageGallery images={selectedCampper.gallery} />
        <p className={styles.description}>{selectedCampper?.description}</p>
        <CustomTabPanel selectedCampper={selectedCampper} isFromReview={isFromReview} />
      </div>
    </div>
  );
};
export default ShowMoreModal;
