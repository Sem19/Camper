import { useState } from "react";
import heart1 from "../../../assets/heart1.png";
import heart2 from "../../../assets/heart2.png";

const Heart = ({ isFavorite, onClick }) => {
  return (
    <img
      src={isFavorite ? heart2 : heart1}
      alt="heart"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Heart;
