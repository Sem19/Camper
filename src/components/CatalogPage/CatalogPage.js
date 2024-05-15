import axios from "axios";
const CatalogPage = () => {
  axios
    .get("https://66438e9d6c6a656587078fa8.mockapi.io/api/v1/Campper")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  return <div>CatalogPage</div>;
};
export default CatalogPage;
