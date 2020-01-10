import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutBurger.module.css";

const CheckoutBurger = props => {
  return (
    <div className={classes.CheckoutBurger}>
      <h2>We hope its taste well!</h2>
      <div
        style={{
          width: "100%",
          height: "300px",
          margin: "auto"
        }}
      >
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked btnType="Danger">
        CANCEL
      </Button>
      <Button clicked btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};
export default CheckoutBurger;
