import React, { useState } from "react";
import styles from "./Calculator.module.css";
import Btn from "./assets/components/Btn";
import Inpt from "./assets/components/Inpt";

function Calculator() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplay = calVal + buttonText;
      setcalVal(newDisplay);
    }
  };

  return (
    <div id="home" className={styles.home}>
      <div id="calculator" className={styles.calculator}>
        <Inpt disVal={calVal}></Inpt>
        <Btn onButtonClick={onButtonClick}></Btn>
      </div>
    </div>
  );
}

export default Calculator;
