import React from "react";
import Aux from "../../../hoc/Auxl/Auxl";
import Buttons from "../../UI/Button/Button";

const orderSummery = props => {
  const ingrSummary = Object.keys(props.ingr).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>
        {props.ingr[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your burger</h3>
      <p>Your ingridains:</p>
      <ul>{ingrSummary}</ul>
      <p>
        <strong>Total Cost: {props.cost.toFixed(2)}</strong>
      </p>
      <p>To Checkout?</p>
      <Buttons btnType={"Success"} clicked={props.clickedContinueBtn}>
        CONTINUE
      </Buttons>
      <Buttons btnType={"Danger"} clicked={props.clickedCancelBtn}>
        CANCEL
      </Buttons>
    </Aux>
  );
};
export default orderSummery;
