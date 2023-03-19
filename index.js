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