import React from "react";
import classes from "./Input.module.css";

const input = props => {
  let inputElement = null;

  switch (props.inputType) {
    case "input":
      inputElement = <input className={classes.InputElement} {...props} />;
      break;
    case "taxtarea":
      inputElement = <taxtarea className={classes.InputElement} {...props} />;
      break;
    default:
      inputElement = <input className={classes.InputElement} {...props} />;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Lable}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
