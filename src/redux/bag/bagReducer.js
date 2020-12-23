import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_QUANTITY,
  DECREASE_QUANTITY,
  CANCEL_PURCHASE,
  FINALIZE_PURCHASE,
} from "./bagTypes";

export const initialState = {
  products: [],
  totalProducts: 0,
  amount: 0,
  totalDiscountAmount: 0,
};

export const bagReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const totalDiscountAmountResultAddProduct = (payload) => {
        let totalDiscountAmount = 0;
        const price = Number(payload.price).toFixed(2);
        const oldPrice = Number(payload.oldPrice).toFixed(2);

        if (oldPrice !== "0.00") {
          totalDiscountAmount = oldPrice - price;
        }

        totalDiscountAmount = (
          Number(state.totalDiscountAmount) + totalDiscountAmount
        ).toFixed(2);
        return totalDiscountAmount;
      };

      return {
        ...state,
        products: [...state.products, action.payload],
        totalProducts: state.totalProducts + 1,
        amount: (Number(state.amount) + Number(action.payload.price)).toFixed(
          2
        ),
        totalDiscountAmount: totalDiscountAmountResultAddProduct(
          action.payload
        ),
      };
    case REMOVE_PRODUCT:
      const totalDiscountAmountResultRemoveProduct = (payload) => {
        let totalDiscountAmount = Number(payload.totalDiscountAmount);

        const price = Number(payload.product.price).toFixed(2);
        const oldPrice = Number(payload.product.oldPrice).toFixed(2);

        if (oldPrice !== "0.00") {
          let result = oldPrice - price;
          totalDiscountAmount -= result;
        }

        totalDiscountAmount = totalDiscountAmount.toFixed(2);

        return totalDiscountAmount;
      };

      return {
        ...state,
        products: state.products.filter(
          (element) => action.payload.product.id !== element.id
        ),
        totalProducts: state.totalProducts - 1,
        amount: (
          Number(state.amount) - Number(action.payload.product.price)
        ).toFixed(2),
        totalDiscountAmount: totalDiscountAmountResultRemoveProduct(
          action.payload
        ),
      };
    case ADD_QUANTITY:
      return {
        ...state,
        products: action.payload.products,
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        products: action.payload.products,
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
