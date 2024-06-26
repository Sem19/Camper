import { useSelector } from "react-redux";
import styles from "./favorites-page.module.css";
import { Modal } from "@mui/material";
import { useState } from "react";
import ShowMoreModal from "../show-more-modal/show-more-modal";

const FavoritesPage = () => {
  const [selectedCampper, setSelectedCampper] = useState(null);
  const listOfFavorites = useSelector((state) => state.favorite.listOfFavorites);

  const handleClose = () => setSelectedCampper(null);

  return (
    <div className={styles.favoritesPage}>
      <div className={styles.favoritesHeader}>
        <h1>Favorites Items</h1>
      </div>
      {listOfFavorites.length === 0 ? (
        <p>No favorite items</p>
      ) : (
        <div className={styles.favoritesContainer}>
          {listOfFavorites.map((item) => (
            <div key={item._id} className={styles.favoriteItem}>
              <h2>{item.title}</h2>
              <img width={290} height={310} alt="img" src={item?.gallery[0]} />
              <p>Price: ${item.price}</p>
              <button onClick={() => setSelectedCampper(item)}>show more</button>
            </div>
          ))}
        </div>
      )}

      <Modal
        open={!!selectedCampper}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <ShowMoreModal selectedCampper={selectedCampper} />
        </div>
      </Modal>
    </div>
  );
};

export default FavoritesPage;
