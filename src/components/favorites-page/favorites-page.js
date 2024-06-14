import { useSelector } from "react-redux";
import styles from "./favorites-page.module.css";

const FavoritesPage = () => {
  const listOfFavorites = useSelector((state) => state.favorite.listOfFavorites);

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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
