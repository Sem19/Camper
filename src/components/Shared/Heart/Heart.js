import { ReactComponent as HeartIcon } from "../../../assets/heart-icon.svg";
import styles from "../../catalog-page/catalog-page.module.css";

const Heart = ({ isFavorite, onClick }) => {
  return <HeartIcon className={isFavorite ? styles.favorite_icon : null} onClick={onClick} />;
};

export default Heart;
