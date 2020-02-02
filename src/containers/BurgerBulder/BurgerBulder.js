import React, { Component } from "react";
import Aux from "../../hoc/Auxl/Auxl";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";
import Spiner from "../../components/UI/Spiner/Spiner";
import axios from "../../axios-orders";
import errorHandler from "../../hoc/errorHandler/errorHandler";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';


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
    // axios
    //   .get("https://reactburgermisha.firebaseio.com/ingridians.json")
    //   .then(res => {
    //     this.setState({
    //       ingredients: res.data
    //     });
    //   });
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
    const quryParams = [];

    let ingWhitPrice = {};
    ingWhitPrice = this.state.ingredients;
    ingWhitPrice["price"] = this.state.totalPrice;

    this.setState({
      ingredients: ingWhitPrice
    });
    for (let i in this.state.ingredients) {
      quryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    // quryParams.push({
    //   pathname: "/checkout",
    //   search: "?" + this.state.totalPrice
    // });
    const queryString = quryParams.join("&");
    console.log("===" + queryString);

    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
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

const mapStateToProps  = stare =>{
  return{
    ings: state.ingredients
  };
}
const mapDispatchToProps  = dispach =>{
  return{
    onIngredientAdded: ()=>dispatch(type:actionTypes.ADD)
  };
}
export default errorHandler(BurgerBulder, axios);
