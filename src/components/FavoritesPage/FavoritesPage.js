import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const listOfFavorites = useSelector((state) => state.favorite.listOfFavorites);
  console.log(listOfFavorites);
  return <div>FavoritesPage</div>;
};
export default FavoritesPage;
