import { ICaterersState } from "./ICaterersState";
import { GETCATERERS } from "../../actions";

const initialState: ICaterersState = {
  caterers: [],
};

export const caterersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GETCATERERS:
      return {
        ...state,
        caterers: action.payload.caterers,
      };
    default:
      return state;
  }
};
