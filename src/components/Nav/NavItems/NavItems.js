import React from "react";
import classes from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";

const navItems = () => (
  <ul className={classes.NavItems}>
    <NavItem active link="/">
      BB
    </NavItem>
    <NavItem link="/">chechout</NavItem>
  </ul>
);

export default navItems;
