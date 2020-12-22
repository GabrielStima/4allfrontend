import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    ADD_QUANTITY,
    DECREASE_QUANTITY,
    CANCEL_PURCHASE,
    FINALIZE_PURCHASE,
  } from './bagTypes';
  
  export const initialState = {
    products: [],
    totalProducts: 0,
    amount: 0,
    totalDiscountAmount: 0,
  };
  
  export const bagReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        const totalDiscountAmountResultAddProduct = () => {
          let count =
            action.payload.precoDe.toFixed(2) -
            action.payload.precoPor.toFixed(2);
          count = (Number(state.totalDiscountAmount) + count).toFixed(2);
  
          return count;
        };
  
        return {
          ...state,
          products: [...state.products, action.payload],
          totalProducts: state.totalProducts + 1,
          amount: (Number(state.amount) + action.payload.precoPor).toFixed(2),
          totalDiscountAmount: totalDiscountAmountResultAddProduct(),
        };
      case REMOVE_PRODUCT:
        const index = state.products.indexOf(action.payload);
        const newProductsArray = (indexOfElement) => {
          let array = state.products;
          array.splice(indexOfElement, 1);
          return array;
        };
        const totalDiscountAmountResultRemoveProduct = () => {
          let count =
            action.payload.precoDe.toFixed(2) -
            action.payload.precoPor.toFixed(2);
          count = (Number(state.totalDiscountAmount) - count).toFixed(2);
  
          return count;
        };
  
        return {
          ...state,
          products: newProductsArray(index),
          totalProducts: state.totalProducts - 1,
          amount: (Number(state.amount) - action.payload.precoPor).toFixed(2),
          totalDiscountAmount: totalDiscountAmountResultRemoveProduct(),
        };
      case ADD_QUANTITY:
        return {
          ...state,
          products: action.payload,
        };
      case DECREASE_QUANTITY:
        return {
          ...state,
          products: action.payload,
        };
      case CANCEL_PURCHASE:
        return {
          ...state,
          products: initialState.products,
          totalProducts: initialState.totalProducts,
          amount: initialState.amount,
          totalDiscountAmount: initialState.totalDiscountAmount,
        };
      case FINALIZE_PURCHASE:
        return {
          ...state,
          products: initialState.products,
          totalProducts: initialState.totalProducts,
          amount: initialState.amount,
          totalDiscountAmount: initialState.totalDiscountAmount,
        };
      default:
        return state;
    }
  };
  