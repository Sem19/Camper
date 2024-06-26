import Categories from "../Shared/categories/categories";
import Heart from "../Shared/heart/heart";
import styles from "../catalog-page/catalog-page.module.css";
import Rating from "../../assets/Rating.png";
import locatin from "../../assets/location.png";
const CamperItem = ({ el, handleShowMore, handleFavoriteClick, isFavorite }) => {
  const isFavoriteItem = isFavorite(el);
  // console.log(isFavoriteItem);
  return (
    <div className={styles.Campper} key={el._id}>
      <img width={290} height={310} alt="img" src={el.gallery[0]} />
      <div className={styles.Info}>
        <h3 className={styles.title}>
          <div>{el.name}</div>
          <div className={styles.PriceBlock}>
            <div>${el.price}</div>
            <Heart
              isFavorite={isFavoriteItem}
              onClick={() => handleFavoriteClick(el, isFavoriteItem)}
            />
          </div>
        </h3>
        <div className={styles.raiting}>
          <img alt="rating" src={Rating} />
          <a
            href="/catalog"
            onClick={(e) => {
              e.preventDefault();
              handleShowMore(el);
            }}
          >
            {el.rating} Reviews
          </a>
          <img alt="location" src={locatin} />
          <div>{el.location}</div>
        </div>
        <p className={styles.description}>{el.description}</p>
        <Categories el={el} key={el._id} />
        <button className={styles.button} onClick={() => handleShowMore(el)}>
          show more
        </button>
      </div>
    </div>
  );
};
export default CamperItem;
