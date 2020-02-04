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
        <Route path={this.props.match.path + "/form"} component={Form} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ings: state.ingredients
  };
};
export default connect(mapStateToProps)(CheckoutSum);
