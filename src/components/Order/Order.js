import React from "react";
import classes from "./Order.module.css";

const order = props => {
  const ingredients = [];

  for (let imgName in props.ingredients) {
    if (imgName !== "price") {
      ingredients.push({ name: imgName, amount: props.ingredients[imgName] });
    }
  }

  const ingNameValOtput = ingredients.map(ig => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          padding: "5px",
          margin: "3px 10px",
          border: "1px solid #ccc",
          backgroundColor: "#eee"
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingridiens: {ingNameValOtput}</p>
      <p>
        Price: <strong>{props.price} USD</strong>
      </p>
    </div>
  );
};

export default order;
