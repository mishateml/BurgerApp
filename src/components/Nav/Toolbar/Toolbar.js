import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Nav from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Logo />
    <nav className={classes.DesktopOnly}>
      <Nav />
    </nav>
  </header>
);

export default toolbar;
