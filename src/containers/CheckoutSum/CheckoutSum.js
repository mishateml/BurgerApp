import React, { Component } from "react";
import CheckoutBurger from "../../components/checkout/CheckoutBurger/CheckoutBurger";

class CheckoutSum extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    }
  };

  render() {
    return (
      <div>
        <CheckoutBurger ingredients={this.state.ingredients} />
      </div>
    );
  }
}
export default CheckoutSum;
