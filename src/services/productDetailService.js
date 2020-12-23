import { products } from "../assets/json/products";

export const getProductById = (id) => {
  const result = {};
  result.item = products.filter((element) => element.id === Number(id));
  result.item = result.item.shift();
  result.relatedProducts = getRelatedProducts(result.item.idCategory).shift();
  return result;
};

export const getRelatedProducts = (idCategory) => {
  const result = {};
  result.title = "Items relacionados";
  result.items = products.filter(
    (element) => element.idCategory === Number(idCategory)
  );
  result.items.length = 5;
  result.url = "/ListProducts/5";

  return [result];
};
