import React from 'react'
import styles from "./Inpt.module.css";

function Inpt({disVal}) {
  return (
    <div id="inpt" className={styles.inpt}>
    <input
      type="text"
      id="display"
      className="w-60 h-10 border-solid border-green-900 border-2 text-black font-bold text-3xl px-3 m-2" value={disVal} readOnly
    />
  </div>
  )
}

export default Inpt
