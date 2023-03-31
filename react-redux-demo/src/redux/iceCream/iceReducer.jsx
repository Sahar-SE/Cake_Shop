import { BUY_ICECREAM } from "./iceTypes";

const initialState = {
    numOfIceCreams: 10
}

const iceReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default: return state
    }
// }

// export default iceReducer