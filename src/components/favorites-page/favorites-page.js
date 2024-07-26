import { useDispatch, useSelector } from "react-redux";
import styles from "./favorites-page.module.css";
import { Modal } from "@mui/material";
import { useState } from "react";
import ShowMoreModal from "../show-more-modal/show-more-modal";
import Heart from "../Shared/heart/heart";
import { addFavoriteItem, removeFavoriteItem } from "../../feature/favorites/favorites";

const FavoritesPage = () => {
  const dispatch = useDispatch();

  const [selectedCampper, setSelectedCampper] = useState(null);
  const listOfFavorites = useSelector((state) => state.favorite.listOfFavorites);
  const handleFavoriteClick = (item, isFavoriteItem) => {
    if (isFavoriteItem) dispatch(removeFavoriteItem(item._id));
    else dispatch(addFavoriteItem(item));
  };

  const handleClose = () => setSelectedCampper(null);

  return (
    <div className={styles.favoritesPage}>
      <div className={styles.favoritesHeader}></div>
      {listOfFavorites.length === 0 ? (
        <p>No favorite items</p>
      ) : (
        <div className={styles.favoritesContainer}>
          {listOfFavorites.map((item) => (
            <div key={item._id} className={styles.favoriteItem}>
              <h2>{item.title}</h2>
              <img width={360} height={260} alt="img" src={item?.gallery[0]} />
              <p className={styles.price}>Price: ${item.price}</p>
              <button onClick={() => setSelectedCampper(item)}>show more</button>
              <div className={styles.heart}>
                <Heart isFavorite={true} onClick={() => handleFavoriteClick(item, true)} />
              </div>
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
