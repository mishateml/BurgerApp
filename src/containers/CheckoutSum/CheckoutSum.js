import React, { Component } from "react";
import CheckoutBurger from "../../components/checkout/CheckoutBurger/CheckoutBurger";
import { Route } from "react-router-dom";
import Form from "./ContactData/ContactData";
import { connect } from "react-redux";

class CheckoutSum extends Component {
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
          ingredients={this.props.ings}
        />
        <Route
          path={this.props.match.path + "/form"}
          render={() => (
            <Form ingredients={this.props.ings} price={this.props.price} />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  };
};
export default connect(mapStateToProps)(CheckoutSum);
