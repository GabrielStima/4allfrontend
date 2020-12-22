import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_REQUEST_SUCCESS,
    FETCH_PRODUCTS_REQUEST_FAIL,
  } from './listProductsTypes';
  
  export const initialState = {
    loading: false,
    products: {
      id:"",
      title:"",
      items:[]
    },
    error: '',
  };
  
  export const listProductsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PRODUCTS_REQUEST_SUCCESS:
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: '',
        };
      case FETCH_PRODUCTS_REQUEST_FAIL:
        return {
          ...state,
          loading: false,
          products: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  