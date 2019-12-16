import React, { Component } from "react";
import Aux from "../../hoc/Auxl/Auxl";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";

const ING_PRICE = {
  salad: 1,
  bacon: 2,
  cheese: 1.5,
  meat: 2
};
const START_COST = 4;

class BurgerBulder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: START_COST,
    canOrder: true,
    orderClick: false,
    showModul: false
  };

  closeModal = () => {
    this.setState({
      showModul: false
    });
  };

  showModulHandler = () => {
    this.setState({
      showModul: true
    });
  };

  ifCanOrder = test => {
    if (START_COST !== test) {
      this.setState({
        canOrder: false
      });
    } else {
      this.setState({
        canOrder: true
      });
    }
  };
  continueBtn = () => {
    alert("ok redy to get");
  };

  addIngredients = type => {
    const oldIngr = this.state.ingredients[type];
    const newIngr = oldIngr + 1;
    const upDatedIngr = { ...this.state.ingredients };
    upDatedIngr[type] = newIngr;

    const addPrice = this.state.totalPrice + ING_PRICE[type];

    this.setState({
      ingredients: upDatedIngr,
      totalPrice: addPrice
    });
    this.ifCanOrder(addPrice);
  };
  subIngredients = type => {
    if (this.state.ingredients[type] < 1) return;
    const oldIngr = this.state.ingredients[type];
    const newIngr = oldIngr - 1;
    const upDatedIngr = { ...this.state.ingredients };
    upDatedIngr[type] = newIngr;

    const subPrice = this.state.totalPrice - ING_PRICE[type];

    this.setState({
      ingredients: upDatedIngr,
      totalPrice: subPrice
    });
    this.ifCanOrder(subPrice);
  };
  render() {
    return (
      <Aux>
        <Modal show={this.state.showModul} closeModal={this.closeModal}>
          <OrderSummery
            clickedContinueBtn={this.continueBtn}
            clickedCancelBtn={this.closeModal}
            ingr={this.state.ingredients}
            cost={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          disabeld={this.state.ingredients}
          addItems={this.addIngredients}
          subItems={this.subIngredients}
          price={this.state.totalPrice}
          canOrder={this.state.canOrder}
          showModule={this.showModulHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBulder;
