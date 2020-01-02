import React, { Component } from "react";
import Aux from "../../hoc/Auxl/Auxl";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";
import Spiner from "../../components/UI/Spiner/Spiner";
import axios from "../../axios-orders";
import errorHandler from "../../hoc/errorHandler/errorHandler";

const ING_PRICE = {
  salad: 1,
  bacon: 2,
  cheese: 1.5,
  meat: 2
};
const START_COST = 4;

class BurgerBulder extends Component {
  state = {
    ingredients: null,
    totalPrice: START_COST,
    canOrder: true,
    orderClick: false,
    showModul: false,
    showLoader: false
  };
  componentDidMount() {
    axios
      .get("https://reactburgermisha.firebaseio.com/ingridians.json")
      .then(res => {
        this.setState({
          ingredients: res.data
        });
      });
  }

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
    this.setState({
      showLoader: true
    });
    // alert("ok redy to get");
    const order = {
      ingridiens: this.state.ingredients,
      price: this.state.totalPrice,
      custumerInfo: {
        name: "misha",
        address: {
          street: "testStreet",
          contry: "israel"
        },
        email: "test@test.com"
      }
    };
    axios
      .post("/orders.json", order)
      .then(
        this.setState({
          showModul: false,
          showLoader: false
        })
      )
      .catch(
        this.setState({
          showLoader: false,
          showModul: false
        })
      );
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
    let burger = <Spiner />;
    let modalVeu = null;

    if (this.state.ingredients) {
      burger = (
        <Aux>
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
      modalVeu = (
        <OrderSummery
          clickedContinueBtn={this.continueBtn}
          clickedCancelBtn={this.closeModal}
          ingr={this.state.ingredients}
          cost={this.state.totalPrice}
        />
      );

      if (this.state.showLoader) {
        modalVeu = <Spiner />;
      }
    }

    return (
      <Aux>
        <Modal show={this.state.showModul} closeModal={this.closeModal}>
          {modalVeu}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
export default errorHandler(BurgerBulder, axios);
