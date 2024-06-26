import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useSelector } from "react-redux";

const Header = () => {
  const listOfFavorites = useSelector((state) => state.favorite.listOfFavorites);

  return (
    <nav className={styles.Header}>
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
            <Badge badgeContent={listOfFavorites.length} color="primary" className={styles.Badge}>
              {/* <MailIcon color="action" /> */}
            </Badge>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
