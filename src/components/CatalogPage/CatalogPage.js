import { useGetCampperDataQuery } from "../../services/campper/campper";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const { data, error, isLoading } = useGetCampperDataQuery();

  console.log(data);

  return (
    <div className={styles.CatalogPage}>
      <div className={styles.Filters}>
        <div>Location</div>
        <input />
        <div>Filters</div>
        <h3>Vehicle equipment</h3>
        <hr />
        <p>Block with tabs</p>
        <h3>Vehicle type</h3>
        <hr />
        <p>Block with tabs</p>
        <button>Search</button>
      </div>
      <div className={styles.CamppersContainer}>
        {data?.map((el) => {
          return (
            <div className={styles.Campper} key={el._id}>
              <img width={130} height={100} alt="img" src={el.gallery[0]} />
              <div>
                <div className={styles.title}>
                  <div>{el.name}</div>
                  <div>${el.price}</div>
                </div>
                <div className={styles.raiting}>
                  <div>{el.rating} Rewiews</div>
                  <div>{el.location}</div>
                </div>
                <p className={styles.description}>{el.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CatalogPage;

// axios
//   .get("https://66438e9d6c6a656587078fa8.mockapi.io/api/v1/Campper")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });
