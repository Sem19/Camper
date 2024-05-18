import { useState } from "react";
import styles from "./filter.module.css";
import Select from "react-select";
const Filter = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [highlightedButtons, setHighlightedButtons] = useState([]);

  const handleButtonClick = (buttonId) => {
    // Перевіряємо, чи кнопка вже виділена
    const index = highlightedButtons.indexOf(buttonId);
    if (index !== -1) {
      // Якщо кнопка вже виділена, видаляємо її зі списку виділених
      setHighlightedButtons((prevState) => prevState.filter((id) => id !== buttonId));
    } else {
      // Якщо кнопка не виділена, додаємо її до списку виділених
      setHighlightedButtons((prevState) => [...prevState, buttonId]);
    }
  };
  return (
    <div className={styles.filters}>
      <div>Location</div>
      <Select options={options} />
      <div>Filters</div>
      <h3>Vehicle equipment</h3>
      <hr />
      <div className={{ marginBottom: 24 }}>
        <div>
          <div className={styles.buttonContainer}>
            {[1, 2, 3, 4, 5].map((buttonId) => (
              <button
                key={buttonId}
                className={
                  highlightedButtons.includes(buttonId)
                    ? `${styles.button} ${styles.highlighted}`
                    : styles.button
                }
                onClick={() => handleButtonClick(buttonId)}
              >
                Button {buttonId}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3>Vehicle type</h3>
          <hr />
          <div className={styles.buttonContainer}>
            {[6, 7, 8].map((buttonId) => (
              <button
                key={buttonId}
                className={
                  highlightedButtons.includes(buttonId)
                    ? `${styles.button} ${styles.highlighted}`
                    : styles.button
                }
                onClick={() => handleButtonClick(buttonId)}
              >
                Button {buttonId}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};
export default Filter;
