import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
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
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
