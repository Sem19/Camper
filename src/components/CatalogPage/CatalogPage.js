import { useGetCampperDataQuery } from "../../services/campper/campper";
import styles from "./CatalogPage.module.css";
import Spiner from "../Shared/Spiner/spiner";
import { useState } from "react";
import Heart from "../Shared/Heart/Heart";
import Rating from "../../assets/Rating.png";
import locatin from "../../assets/location.png";
import { Modal } from "@mui/material";
import Filter from "../filter/filter";
import Categories from "../Shared/categories/categories";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteItem, removeFavoriteItem } from "../../feature/favorites/favorites";

const CatalogPage = () => {
  const { data, error, isLoading } = useGetCampperDataQuery();
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedCampper, setSelectedCampper] = useState(null);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const [open, setOpen] = useState(false);
  const handleShowMore = (campper) => {
    setOpen(true);
    setSelectedCampper(campper);
  };
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const listOfFavorites = useSelector((state) => state.favorite.listOfFavorites);

  const isFavorite = (item) => listOfFavorites.some((fav) => fav.id === item._id);
  const handleFavoriteClick = (item) => {
    if (isFavorite(item)) {
      dispatch(removeFavoriteItem(item._id));
    } else {
      const addItem = {
        id: item._id,
        price: item.price,
        count: 1,
        title: item.name,
      };
      dispatch(addFavoriteItem(addItem));
    }
  };
  // console.log(listOfFavorites);
  return (
    <div className={styles.CatalogPage}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modalContainer}>
          <div className={styles.insideModal}>
            <h1>{selectedCampper?.name}</h1>
            <p>{selectedCampper?.description}</p>
          </div>
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
            {data?.slice(0, visibleCount).map((el) => (
              <div className={styles.Campper} key={el._id}>
                <img width={290} height={310} alt="img" src={el.gallery[0]} />
                <div className={styles.Info}>
                  <h3 className={styles.title}>
                    <div>{el.name}</div>
                    <div className={styles.PriceBlock}>
                      <div>${el.price}</div>
                      <Heart isFavorite={isFavorite(el)} onClick={() => handleFavoriteClick(el)} />
                    </div>
                  </h3>
                  <div className={styles.raiting}>
                    <img alt="rating" src={Rating} />
                    <a href="/">{el.rating} Reviews</a>
                    <img alt="location" src={locatin} />
                    <div>{el.location}</div>
                  </div>
                  <p className={styles.description}>{el.description}</p>
                  <Categories
                    adults={el.adults}
                    transmission={el.transmission}
                    ac={el.details.airConditioner}
                    petrol={el.engine}
                    kitchen={el.details.kitchen}
                    beds={el.details.beds}
                    cd={el.details.CD}
                    radio={el.details.radio}
                    hob={el.details.hob}
                    toilet={el.details.toilet}
                    shower={el.details.shower}
                    freezer={el.details.freezer}
                    gas={el.details.gas}
                    water={el.details.water}
                    microwave={el.details.microwave}
                  />
                  <button className={styles.button} onClick={() => handleShowMore(el)}>
                    show more
                  </button>
                </div>
              </div>
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
