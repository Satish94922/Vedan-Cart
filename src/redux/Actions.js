export const ADD_PRODUCT = 'ADD_TODO';
export const ADD_ITEM_TO_WISHLIST='ADD_ITEM_TO_WISHLIST';
export const ADD_ITEM_TO_CART='ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART='REMOVE_ITEM_FROM_CART';
export const ADD_ADRESS='ADD_ADRESS';
export const DELETE_ADRESS='DELETE_ADRESS';
export const UPDATE_ADRESS='UPDATE_ADRESS';
export const ADD_ORDER='ADD_ORDER';
export const REMOVE_ITEM_FROM_WISHLIST='REMOVE_ITEM_FROM_WISHLIST';


export function addProducts(task) {
    return {
      type: ADD_PRODUCT,
      payload: task,
    };
}


export function addItemToWishList(task){
    return{
        type:ADD_ITEM_TO_WISHLIST,
        payload:task,
    }
}

export function addItemToCart(task){
    return{
        type:ADD_ITEM_TO_CART,
        payload:task,
    }
}

export const removeItemFromCart=(id)=>{
    
    return{
        type:REMOVE_ITEM_FROM_CART,
        payload:id,
    }
}

export const removeItemFromWishList=(id)=>{
    
    return{
        type:REMOVE_ITEM_FROM_WISHLIST,
        payload:id,
    }
}

export const addAdress=(task)=>{
    return{
        type:ADD_ADRESS,
        payload:task,
    }
}

export const deleteAdress=(id)=>{
    return{
        type:DELETE_ADRESS,
        payload:id,
    }
}

export const updateAdress=(id)=>{
    return{
        type:UPDATE_ADRESS,
        payload:id,
    }
}

export const addOrder=(task)=>{
    return{
        type:ADD_ORDER,
        payload:task,
    }
}