import React from "react";
import styles from "../../Styles/Button.module.css";

export const SignupButton = ({ text }) => {
  return <button className={styles.btn}>{text}</button>;
};
