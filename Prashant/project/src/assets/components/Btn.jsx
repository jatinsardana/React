import React from "react";
import styles from "./Btn.module.css";

function Btn({onButtonClick}) {
  const btnName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "5",
    "-",
    "6",
    "7",
    "8",
    "*",
    "9",
    "0",
    "/",
    "="
  ];

  return (
    <div
      id="buttonCnt"
      className="flex justify-center align-middle gap-2 p-2 flex-wrap"
    >
      {btnName.map(btnName =><button className={styles.btn} onClick={()=>onButtonClick(btnName)}>{btnName}</button>)}
    </div>
  );
}

export default Btn;
