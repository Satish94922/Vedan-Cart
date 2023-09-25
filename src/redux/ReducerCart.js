import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./Actions";

const initialState = {
  data: [],
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:

      const itemExists = state.data.some((item) => item.id === action.payload.id);
      if (!itemExists) {

        return {
          ...state,
          data: [...state.data, action.payload],
        };
      }
    
      case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload)
      }

    default:
      return state;
  }
}


