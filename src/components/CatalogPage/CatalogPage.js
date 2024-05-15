// import axios from "axios";
import { useGetCampperDataQuery } from "../../services/campper/campper";
const CatalogPage = () => {
  const { data, error, isLoading } = useGetCampperDataQuery();

  console.log(data);

  return <div>CatalogPage</div>;
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
