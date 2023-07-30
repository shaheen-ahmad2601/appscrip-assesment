import React from "react";
import styles from "../../Styles/Button.module.css";

export const FormButton = ({ text, color }) => {
  const bgColor = {
    backgroundColor: color,
  };
  return (
    <button style={bgColor} className={styles.form_Btn}>
      {text}
    </button>
  );
};
