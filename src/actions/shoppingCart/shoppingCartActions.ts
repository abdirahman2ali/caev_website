export const ADD_TO_CART = "ADD_TO_CART";
export const addItem = (title: string, price: number, item: any) => {
  return {
    type: ADD_TO_CART,
    title: title,
    price: price,
    item: item,
  };
};

export const GET_CART = "GET_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
