import * as actionTypes from "./actions";
import axios from "../../axios-orders";

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};
export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIng = ing => {
  return {
    type: actionTypes.SET_ING,
    ing: ing
  };
};

export const fetchIngErr = () => {
  return {
    type: actionTypes.FETCH_ING_ERR
  };
};

export const initIngs = () => {
  return dispatch => {
    axios
      .get("https://reactburgermisha.firebaseio.com/ingridians.json")
      .then(res => {
        dispatch(setIng(res.data));
      })
      .catch(error => {
        dispatch(fetchIngErr());
      });
  };
};
