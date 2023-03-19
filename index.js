const redux = require('redux')
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'

{
    type: BUY_CAKE,
    info: 'First redux action'
}

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())
store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch()