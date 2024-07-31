import Categories from "../Shared/categories/categories";
import Heart from "../Shared/heart/heart";
import styles from "./camper-item.module.css";
import Rating from "../../assets/Rating.png";
import locatin from "../../assets/location.png";
const CamperItem = ({ el, handleShowMore, handleFavoriteClick, isFavorite, addItemToCart }) => {
  const isFavoriteItem = isFavorite(el);

  return (
    <div className={styles.Campper} key={el._id}>
      <img width={360} height={260} alt="img" src={el.gallery[0]} />
      <div className={styles.Info}>
        <h3 className={styles.title}>
          <div>{el.name}</div>
          <div className={styles.PriceBlock}>
            <div>${el.price}</div>
            <Heart
              styles={{ cursor: "pointer" }}
              isFavorite={isFavoriteItem}
              onClick={() => handleFavoriteClick(el, isFavoriteItem)}
            />
          </div>
        </h3>
        <div className={styles.raiting}>
          <img alt="rating" src={Rating} />
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              handleShowMore(el, true);
            }}
          >
            {el.rating} Reviews
          </a>
          <img alt="location" src={locatin} />
          <div>{el.location}</div>
        </div>
        <p className={styles.description}>{el.description}</p>
        <Categories el={el} key={el._id} />
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => handleShowMore(el)}>
            show more
          </button>
          <button className={styles.button} onClick={() => addItemToCart(el)}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default CamperItem;
