import { useState } from "react";
import heart1 from "../../../assets/heart1.png";
import heart2 from "../../../assets/heart2.png";

const Heart = () => {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed((prevState) => !prevState);
  };

  return <img src={isRed ? heart2 : heart1} alt="heart" onClick={handleClick} />;
};

export default Heart;
