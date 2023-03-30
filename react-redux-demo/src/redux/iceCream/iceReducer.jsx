import iceAction from "./iceActions";
import BUY_ICECREAM from "./iceTypes";

const initialState = {
    numOfIceCream: 10
}

const iceReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default: return state
    }
}