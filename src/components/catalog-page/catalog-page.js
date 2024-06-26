import { useGetCampperDataQuery } from "../../services/campper/campper";
import styles from "./catalog-page.module.css";
import Spiner from "../Shared/spiner/spiner";
import { useState } from "react";
import { Modal } from "@mui/material";
import Filter from "../filter/filter";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteItem, removeFavoriteItem } from "../../feature/favorites/favorites";

import ShowMoreModal from "../show-more-modal/show-more-modal";
import CamperItem from "../camper-item/camper-item";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { location, type, equipment } = useSelector((state) => state.filter);
  const { data = [], error, isLoading } = useGetCampperDataQuery();
  const listOfFavorites = useSelector((state) => state.favorite.listOfFavorites);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedCampper, setSelectedCampper] = useState(null);

  const handleLoadMore = () => setVisibleCount((prevCount) => prevCount + 4);
  const handleClose = () => setSelectedCampper(null);
  const handleShowMore = (campper) => setSelectedCampper(campper);

  const isFavorite = (item) => listOfFavorites.some((fav) => fav?._id === item?._id);
  const handleFavoriteClick = (item, isFavoriteItem) => {
    if (isFavoriteItem) dispatch(removeFavoriteItem(item._id));
    else dispatch(addFavoriteItem(item));
  };

  const filteredArray = () => {
    let array = [...data];

    if (location) {
      array = array.filter((el) => el.location.toLowerCase().includes(location.toLowerCase()));
    }
    if (type) {
      array = array.filter((el) => el.form === type);
    }

    if (equipment.length) {
      array = array.filter((ela) => equipment.every((el) => ela.details[el]));
    }

    return array.slice(0, visibleCount);
  };
  console.log(filteredArray());
  return (
    <div className={styles.CatalogPage}>
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
      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <div>
            <Filter />
          </div>
          <div className={styles.CamppersContainer}>
            {filteredArray().map((el) => (
              <CamperItem
                key={el._id}
                el={el}
                handleShowMore={handleShowMore}
                handleFavoriteClick={handleFavoriteClick}
                isFavorite={isFavorite}
              />
            ))}
            <div style={{ margin: "0 auto", backgroundColor: "#ffffff" }}>
              <button onClick={handleLoadMore} className={styles.loadMoreButton}>
                load more
              </button>
            </div>
          </div>
          {error?.error}
        </>
      )}
    </div>
  );
};

export default CatalogPage;
