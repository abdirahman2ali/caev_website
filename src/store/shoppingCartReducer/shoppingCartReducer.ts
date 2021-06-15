import { ADD_TO_CART } from "../../actions";

const initialState: { shoppingCart: any } = {
  shoppingCart: [],
};

export const shoppingCartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action);
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.item],
      };
    default:
      return state;
  }
};
