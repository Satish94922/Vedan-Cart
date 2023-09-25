import { createStore } from 'redux';
import ProductReducer from './Reducerproduct';
import WishListReducer from './Reducerwishlist';
import CartReducer from './ReducerCart';
import AdressReducer from './ReducerAdress';
import OrderReducer from './ReducerOrder';

import { combineReducers } from 'redux';

const rootReducer=combineReducers({
    ProductReducer,
    WishListReducer,
    CartReducer,
    AdressReducer,
    OrderReducer

  })

const store = createStore(rootReducer);

export default store;