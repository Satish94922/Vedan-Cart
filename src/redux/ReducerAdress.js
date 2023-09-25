
import {ADD_ADRESS,DELETE_ADRESS, UPDATE_ADRESS} from "./Actions";
const initialState = {
    data: []
}

export default function AddressReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ADRESS:
            const adressExists = state.data.some((item) => item.city === action.payload.city);
            if (!adressExists) {

                return {
                  ...state,
                  data: [...state.data, action.payload],
                };
              }
        case DELETE_ADRESS:
            return{
                ...state,
                data: state.data.filter((item) => item.id !== action.payload)
            }
        case UPDATE_ADRESS:
            return{
                ...state,
                data:state.data.map((item)=>{
                    if(item.id==action.payload.id){
                        return {
                            ...item,
                            state: action.payload.state,
                            city: action.payload.city,
                            pincode: action.payload.pincode,
                            type: action.payload.type,
                        };
                    }
                })
            }
        default:
            return state;
    }
}