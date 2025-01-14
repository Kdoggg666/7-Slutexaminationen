import * as actionTypes from './shopping-types';
import MenuItems from '../../MenuItems';

const INITIAL_STATE = {
    products: [MenuItems], // {id, title, desc, price, img}
    cart: [], // {id, title, desc, price, img, qty} 
    currentItem: null,
}


const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:        
            return{}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}    
        default:
            return state;    
    }
};

export default shopReducer;