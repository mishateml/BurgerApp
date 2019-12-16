import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxl/Auxl";

const sideDrawer = props => {
  let inOutSideDrop = [classes.SideDrawer, classes.Open];
  if (!props.show) {
    inOutSideDrop = [classes.SideDrawer, classes.Close];
  }
  return (
    <Aux>
      <Backdrop clicked={props.clicked} show={props.show} />
      <div className={inOutSideDrop.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <NavItems />
      </div>
    </Aux>
  );
};
export default sideDrawer;
