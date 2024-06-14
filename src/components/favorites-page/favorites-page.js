import { useSelector } from "react-redux";
import styles from "./favorites-page.module.css";
import { useNavigate } from "react-router";

const FavoritesPage = () => {
  const listOfFavorites = useSelector((state) => state.favorite.listOfFavorites);

  const navigate = useNavigate();

  const handleShowMore = (itemId) => {
    navigate(`/catalog?id=${itemId}`);
  };

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
            <div key={item.id} className={styles.favoriteItem}>
              <h2>{item.title}</h2>
              <img width={290} height={310} alt="img" src={item?.gallery[0]} />
              <p>Price: {item.price}</p>
              <button onClick={() => handleShowMore(item.id)}>show more</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
