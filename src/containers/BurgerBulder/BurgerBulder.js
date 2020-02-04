import React, { Component } from "react";
import Aux from "../../hoc/Auxl/Auxl";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";
import Spiner from "../../components/UI/Spiner/Spiner";
import axios from "../../axios-orders";
import errorHandler from "../../hoc/errorHandler/errorHandler";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class BurgerBulder extends Component {
  state = {
    orderClick: false,
    showModul: false,
    showLoader: false
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
    console.log(test);

    if (4 >= test) {
      return true;
    } else {
      return false;
    }
  };
  continueBtn = () => {
    this.props.history.push("/checkout");
  };

  render() {
    let burger = <Spiner />;
    let modalVeu = null;

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            disabeld={this.props.ings}
            addItems={this.props.onIngredientAdded}
            subItems={this.props.onIngredientRemoved}
            price={this.props.price}
            canOrder={this.ifCanOrder(this.props.price)}
            showModule={this.showModulHandler}
          />
        </Aux>
      );
      modalVeu = (
        <OrderSummery
          clickedContinueBtn={this.continueBtn}
          clickedCancelBtn={this.closeModal}
          ingr={this.props.ings}
          cost={this.props.price}
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

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: ingName =>
      dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(errorHandler(BurgerBulder, axios));
