import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";

 const reducer = combineReducers({
    allProducts: dataReducer,
})
export default reducer