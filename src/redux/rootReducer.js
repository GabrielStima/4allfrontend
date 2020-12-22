import { combineReducers } from 'redux';
// import { bagReducer } from './bag/bagReducer.js';
import { homeReducer } from './home/homeReducer.js';
import { productDetailReducer } from './productDetail/productDetailReducer.js';
import { listProductsReducer } from './listProducts/listProductsReducer.js';

const rootReducer = combineReducers({
    home: homeReducer,
    // bag: bagReducer,
    productDetail: productDetailReducer,
    listProducts: listProductsReducer,
});

export default rootReducer;