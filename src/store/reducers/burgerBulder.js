import * as actionTypes from "../actions/actions";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 4,
  error: false
};

const ING_PRICE = {
  salad: 1,
  bacon: 2,
  cheese: 1.3,
  meat: 2
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + ING_PRICE[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - ING_PRICE[action.ingredientName]
      };
    case actionTypes.SET_ING:
      return {
        ...state,
        ingredients: action.ing,
        error: false
      };
    case actionTypes.FETCH_ING_ERR:
      return {
        ...state,
        error: false
      };

    default:
      return state;
  }
};

export default reducer;
