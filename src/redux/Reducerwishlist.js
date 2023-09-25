import { ADD_ITEM_TO_WISHLIST, REMOVE_ITEM_FROM_WISHLIST } from "./Actions";

const initialState = {
  data: [],
};

export default function WishListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_WISHLIST:

      const itemExists = state.data.some((item) => item.id === action.payload.id);

      if (!itemExists) {

        return {
          ...state,
          data: [...state.data, action.payload],
        };
      }

      return state;
    case REMOVE_ITEM_FROM_WISHLIST:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload)
      }

    default:
      return state;
  }
}


