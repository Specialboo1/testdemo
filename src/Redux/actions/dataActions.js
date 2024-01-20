
import { ActionTypes } from "../constants/actiontypes"

export const loaddata = (products) => {
    return({
        type: ActionTypes.LOAD_DATA,
        payload: products
    })
}

export const searchdata = (item) => {
    return ({
        type: ActionTypes.SEARCH_DATA,
        payload: item
    })
}

export const filterdata = (filtereddata) => {
    return ({
        type: ActionTypes.FILTER_DATA,
        payload: filtereddata
    })
}