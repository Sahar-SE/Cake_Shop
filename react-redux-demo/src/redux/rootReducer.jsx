import { combineReducers } from 'redux'
import cakeReducer from "./cake/cakeReducer";
import iceReducer from "./iceCream/iceReducer";

const rootReducer = () => {
    return {
    cake: cakeReducer,
    iceCream: iceReducer
    }
}

export default rootReducer