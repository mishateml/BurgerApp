import React from "react";
import classes from "./Input.module.css";

const input = props => {
  let inputElement = null;

  switch (props.elType) {
    case "input":
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elConfig}
          value={props.elValue}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={classes.InputElement}
          onChange={props.changed}
          value={props.elValue}
        >
          {props.elConfig.options.map(option => (
            <option key={option.displayVal} value={option.val}>
              {option.displayVal}
            </option>
          ))}
        </select>
      );
      break;
    case "taxtarea":
      inputElement = (
        <taxtarea
          className={classes.InputElement}
          onChange={props.changed}
          {...props.elConfig}
          value={props.elValue}
        />
      );
      break;
    default:
      console.log(props);
      inputElement = (
        <input
          className={classes.InputElement}
          onChange={props.changed}
          {...props.elConfig}
          value={props.elValue}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Lable}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
