import { itemsCategory5 } from '../assets/json/itemsCategory5';

export const getListByCategory = (id, page = 1) => {
    const result = {...itemsCategory5};
    result.pages = Math.ceil(result.items.length/12);
    const finalIndex = (page * 12);
    const initialIndex = finalIndex - 12;

    result.items = result.items
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
      
    result.items = result.items.slice(initialIndex, finalIndex);

    return result;
}

export const getListFiltered = (filter, id, page = 1) => {
    const result = {...itemsCategory5};
    result.items = itemsCategory5.items.filter(element => element.idCategory === Number(filter));
    result.pages = Math.ceil(result.items.length/12);
    result.filters = filter;
    const finalIndex = (page * 12);
    const initialIndex = finalIndex - 12;
    result.items = result.items.slice(initialIndex, finalIndex);

    return result;
}
