import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl";

const controls = [
  { lable: "Salad", type: "salad" },
  { lable: "Bacon", type: "bacon" },
  { lable: "Cheese", type: "cheese" },
  { lable: "Meat", type: "meat" }
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      {console.log(props.canOrder)}
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.lable}
            name={ctrl.lable}
            addItem={() => props.addItems(ctrl.type)}
            subItem={() => props.subItems(ctrl.type)}
            disabeld={props.disabeld[ctrl.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={props.canOrder}
        onClick={props.showModule}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
