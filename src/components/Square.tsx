import { useState } from "react";
import "../styles/components/Square.css";

const Square = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [value, setValue] = useState<string>();

  const handleClick = () => {
    if (!isPressed) {
      console.log("click");
      setIsPressed(true);
      setValue("X");
    }
  };

  return (
    <button id="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
