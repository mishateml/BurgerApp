import React from "react";
import bImg from "../../assets/burger-logo.png";
import classes from "./Logo.module.css";

const logo = props => (
  <div className={classes.Logo}>
    <img src={bImg} alt="Logo" />
  </div>
);
export default logo;
