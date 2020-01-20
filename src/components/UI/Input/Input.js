import React from "react";
import classes from "./Input.module.css";

const input = props => {
  let inputElement = null;
  const inputElementStyle = [classes.InputElement];

  if (props.valid && props.shudeValidate && props.touched) {
    inputElementStyle.push(classes.Invalid);
  }

  switch (props.elType) {
    case "input":
      inputElement = (
        <input
          className={inputElementStyle.join(" ")}
          {...props.elConfig}
          value={props.elValue}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputElementStyle.join(" ")}
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
          className={inputElementStyle.join(" ")}
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
          className={inputElementStyle.join(" ")}
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
