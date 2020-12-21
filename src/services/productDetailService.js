import { products } from '../assets/json/products';

export const productDetailService = (id) => {
    const result = products.filter(element => element.id === Number(id));
    return result.shift();
}