import { useSelector } from "react-redux";
import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const listOfFavorites = useSelector((state) => state.favorite.listOfFavorites);

  return (
    <div className={styles.favoritesPage}>
      <h1>Favorites Items</h1>
      {listOfFavorites.length === 0 ? (
        <p>No favorite items</p>
      ) : (
        listOfFavorites.map((item) => (
          <div key={item.id} className={styles.favoriteItem}>
            <h2>{item.title}</h2>
            <img width={290} height={310} alt="img" src={item?.gallery[0]} />
            <p>Price: {item.price}</p>
            <p>Count: {item.count}</p>
          </div>
        ))
        // Або використання компонента FavoriteItem
        // listOfFavorites.map((item) => <FavoriteItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default FavoritesPage;
