import { ActionTypes } from "../constants/actiontypes";

export const dataReducer = (state = {products:[]},action) => {
    switch (action.type) {
        case ActionTypes.LOAD_DATA:
            return {...state, products : action.payload};
            case ActionTypes.SEARCH_DATA:
            return {...state, products: action.payload}
            case ActionTypes.FILTER_DATA:
            return {...state, products: action.payload}
        default:
            return state;
    }
}