import * as actionTypes from "./actions";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, order) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: order
  };
};

export const purchaseBurgerFail = err => {
  return {
    type: actionTypes.PURCHASE_BURGER_ERROR,
    error: err
  };
};

export const purchaseBurgerStart = orderData => {
  return dispatch => {
    axios
      .post("/orders.json", orderData)
      .then(res => {
        dispatch(purchaseBurgerStart(res.data, orderData));
      })
      .catch(err => {
        dispatch(purchaseBurgerFail(err));
      });
  };
};
