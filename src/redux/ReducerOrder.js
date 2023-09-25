import { ADD_ORDER } from "./Actions";

const initialState={
    data:[]
}

export default function OrderReducer(state=initialState,action){
    switch(action.type){
        case ADD_ORDER:
            return{
                ...state,
                data:state.data.concat(action.payload)
            }
        default:
            return state
    }
}