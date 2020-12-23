import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    ADD_QUANTITY,
    DECREASE_QUANTITY,
    CANCEL_PURCHASE,
    FINALIZE_PURCHASE,
  } from './bagTypes';
  
  export const addProductInTheBag = (object) => {
    return {
      type: ADD_PRODUCT,
      payload: object,
    };
  };
  export const removeProductInTheBag = (object) => {
    return {
      type: REMOVE_PRODUCT,
      payload: object,
    };
  };
  export const addProductQuantity = (object) => {
    return {
      type: ADD_QUANTITY,
      payload: object,
    };
  };
  export const decreaseProductQuantity = (object) => {
    return {
      type: DECREASE_QUANTITY,
      payload: object,
    };
  };
  export const cancelPurchase = () => {
    return {
      type: CANCEL_PURCHASE,
    };
  };
  export const finalizePurchase = () => {
    return {
      type: FINALIZE_PURCHASE,
    };
  };
  