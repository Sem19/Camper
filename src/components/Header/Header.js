import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/catalog">CatalogPage</Link>
        </li>
        <li>
          <Link to="/favorites">FavoritesPage</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
