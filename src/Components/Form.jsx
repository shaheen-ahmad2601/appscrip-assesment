import React from "react";
import styles from "../Styles/Form.module.css";
import { FormButton } from "./Buttons/FormButton";
import {
  expandMore,
  googleImg,
  vectorFull,
  vectorHalf,
} from "../../public/assets/config";
import {
  termsCondition,
  googleTextBtn,
  timeZone,
} from "../../public/assets/en";
export const Form = () => {
  return (
    <form action="" className={styles.form}>
      <div className={styles.google_SignUp_Btn}>
        <img src={googleImg} alt="google" />
        <span>{googleTextBtn}</span>
      </div>
      <img src={vectorFull} alt="Vector-full" border="0" />
      <input
        type="text"
        className={styles.nameInput}
        placeholder="First Name*"
      />
      <input
        type="text"
        className={styles.nameInput}
        placeholder="Last Name*"
      />{" "}
      <br />
      <input type="text" className={styles.inputt} placeholder="Email*" />{" "}
      <br />
      <input type="text" className={styles.inputt} placeholder="Password*" />
      <div className={styles.timeZone}>
        {timeZone}
        <img src={expandMore} alt="expand more" />
      </div>
      <FormButton color="#7426F2" text="Signup as a user" /> <br />
      <div className={styles.timeZone}>{termsCondition}</div>
      <div className={styles.or}>
        <img src={vectorHalf} alt="Vector-half" border="0" />
        <p>or</p>
        <img src={vectorHalf} alt="Vector-half" border="0" />
      </div>
      <FormButton text="Signup as a creator" color="#5D1C8E" /> <br />
      <div style={{ display: "block" }} className={styles.timeZone}>
        Already have an account? <span style={{ color: "#7421F4" }}>Login</span>
      </div>
    </form>
  );
};
