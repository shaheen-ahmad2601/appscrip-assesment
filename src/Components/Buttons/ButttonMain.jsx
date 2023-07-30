import React from "react";
import styles from "../../Styles/Button.module.css";

export const ButttonMain = ({ text, color }) => {
  const bgColor = {
    backgroundColor: color,
  };
  return (
    <button style={bgColor} className={styles.main_Btn}>
      {text}
    </button>
  );
};
