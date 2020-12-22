import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_REQUEST_SUCCESS,
    FETCH_PRODUCT_REQUEST_FAIL,
  } from './productDetailTypes';
  
  export const initialState = {
    loading: false,
    product: {
      item:{
        image:"",
        title:"",
        description:"",
        size:[],
        oldPrice:"",
        price:""
      },
      relatedProducts:{}
    },
    error: '',
  };
  
  export const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PRODUCT_REQUEST_SUCCESS:
        return {
          ...state,
          product: action.payload,
          loading: false,
          error: '',
        };
      case FETCH_PRODUCT_REQUEST_FAIL:
        return {
          ...state,
          loading: false,
          product: {},
          error: action.payload,
        };
      default:
        return state;
    }
  };
  