import Categories from "../Shared/categories/categories";
import Heart from "../Shared/heart/heart";
import styles from "../catalog-page/catalog-page.module.css";
import Rating from "../../assets/Rating.png";
import locatin from "../../assets/location.png";
const CamperItem = ({ el, handleShowMore, handleFavoriteClick, isFavorite }) => {
  /*   const detailsArray = [
    { img: usersIcon, text: `${el?.adults} adults` },
    { img: transmitionIcon, text: el?.transmission },
    { img: fuelIcon, text: el?.engine },
    { img: eatIcon, text: `Kitchen` },
    { img: badIcon, text: `${el?.details?.beds} beds` },
    { img: acIcon, text: `AC` },
  ];

 */
  const isFavoriteItem = isFavorite(el);
  console.log(isFavoriteItem);
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
          <a href="/">{el.rating} Reviews</a>
          <img alt="location" src={locatin} />
          <div>{el.location}</div>
        </div>
        <p className={styles.description}>{el.description}</p>
        <Categories
          adults={el.adults}
          transmission={el.transmission}
          ac={el.details.airConditioner}
          petrol={el.engine}
          kitchen={el.details.kitchen}
          beds={el.details.beds}
          cd={el.details.CD}
          radio={el.details.radio}
          hob={el.details.hob}
          toilet={el.details.toilet}
          shower={el.details.shower}
          freezer={el.details.freezer}
          gas={el.details.gas}
          water={el.details.water}
          microwave={el.details.microwave}
        />
        <button className={styles.button} onClick={() => handleShowMore(el)}>
          show more
        </button>
      </div>
    </div>
  );
};
export default CamperItem;
