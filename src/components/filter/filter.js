import styles from "./filter.module.css";
import Select from "react-select";
const Filter = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className={styles.filters}>
      <div>Location</div>
      <Select options={options} />;<div>Filters</div>
      <h3>Vehicle equipment</h3>
      <hr />
      <p>Block with tabs</p>
      <h3>Vehicle type</h3>
      <hr />
      <p>Block with tabs</p>
      <button>Search</button>
    </div>
  );
};
export default Filter;
