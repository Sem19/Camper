import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import Cart from "../cart/cart";
import User from "../user/User";

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
              color="error"
              className={styles.Badge}
            ></Badge>
          </Link>
        </li>
      </ul>
      <div className={styles.cart_user}>
        <User />
        <Cart />
      </div>
    </nav>
  );
};
export default Header;
