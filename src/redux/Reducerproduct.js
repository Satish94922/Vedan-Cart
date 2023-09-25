
import { ADD_PRODUCT,} from "./Actions";
const initialState = {
    data: null,
    isLoading: false
}

export default function ProductReducer(state = initialState, action) {
    switch (action.type) {
        
        case ADD_PRODUCT:
            return {
                ...state,
                data: action.payload
                
            }
            
        
        default:
            return state;
    }
}


