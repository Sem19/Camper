import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../cart/cart";

const Header = () => {
  const listOfFavorites = useSelector((state) => state.favorite.listOfFavorites);

  return (
    <nav className={styles.Header}>
      <div></div>
      <ul className={styles.NavLinks}>
        <li>
          <Link to="/" className={styles.NavLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/catalog" className={styles.NavLink}>
            Catalog
          </Link>
        </li>
        <li>
          <Link to="/favorites" className={styles.NavLink}>
            Favorites
            <Badge
              badgeContent={listOfFavorites.length}
              color="primary"
              className={styles.Badge}
            ></Badge>
          </Link>
        </li>
      </ul>
      <Cart />
    </nav>
  );
};
export default Header;
