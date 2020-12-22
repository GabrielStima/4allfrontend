import { products } from '../assets/json/products';

export const getProductById = (id) => {
    const result = products.filter(element => element.id === Number(id));
    return result.shift();
}

export const getRelatedProducts = (idCategory) => {
    const result = {};
    result.title = "Items relacionados";
    result.items = products.filter(element => element.idCategory === Number(idCategory));
    result.items.length = 5;
    result.url = "/ListProducts/5";

    return [result];
}