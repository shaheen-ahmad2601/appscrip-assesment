import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "../Styles/Navbar.module.css";
import { SignupButton } from "../Components/Buttons/SignupButton";
import { burgerMenu } from "../../public/assets/config";
export const Navbar = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.logo}>lOGO</div>

      <div className={styles.heading}>
        <div className={styles.nav_Content}>
          <p className={styles.home}>Home</p>
          <p>About Us</p>
          <p>Our Blog</p>
          <p>Support</p>
          <p>Affiliate</p>
          <Box sx={{ fontSize: "1rem", minWidth: "100px" }}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "white" }}>Program</InputLabel>
              <Select
                className={styles.selectTag}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{
                  color: "white",
                  ".MuiSvgIcon-root ": { fill: "white !important" },
                }}
              ></Select>
            </FormControl>
          </Box>
        </div>
        <div className={styles.login_container}>
          <p>Login</p>
          <SignupButton text="Sign up" />
        </div>
      </div>
      <div className={styles.hamburger_container}>
        {" "}
        <img src={burgerMenu} alt="Burger-menu" />
      </div>
    </div>
  );
};
