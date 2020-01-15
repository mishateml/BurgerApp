import React, { Component } from "react";
import CheckoutBurger from "../../components/checkout/CheckoutBurger/CheckoutBurger";
import { Route } from "react-router-dom";
import Form from "./ContactData/ContactData";

class CheckoutSum extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  };

  UNSAFE_componentWillMount() {
    const ingredients = {};
    const query = new URLSearchParams(this.props.location.search);
    let price = 4;

    for (let param of query.entries()) {
      // if (param[0] === "price") {
      //   price = param[1];
      // } else {
      ingredients[param[0]] = +param[1];
    }
    // }

    this.setState({
      ingredients: ingredients,
      totalPrice: price
    });
  }

  chackoutCencelHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/form");
  };

  render() {
    return (
      <div>
        <CheckoutBurger
          chackoutCencel={this.chackoutCencelHandler}
          checkoutContinue={this.checkoutContinueHandler}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.path + "/form"}
          render={() => (
            <Form
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}
export default CheckoutSum;
