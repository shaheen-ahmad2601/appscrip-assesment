import React from "react";
import styles from "../Styles/Header.module.css";
import { Form } from "@/Components/Form";
import { headingText, subHeadingText } from "../../public/assets/en";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.backgroundImage} />
      <div className={styles.headingDiv}>
        <span className={styles.heading}>{headingText}</span>
        <span className={styles.subHeading_content}>{subHeadingText}</span>
      </div>
      <div className={styles.formContainer}>
        <Form />
      </div>
    </div>
  );
};
