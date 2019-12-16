import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.name}</div>
    <button className={classes.More} onClick={props.addItem}>
      More
    </button>
    <button
      className={classes.Less}
      onClick={props.subItem}
      disabled={!props.disabeld}
    >
      Less
    </button>
  </div>
);

export default BuildControl;
