import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function HooksIceCreamContainer() {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch(dispatch => dispatch(buyIceCream()))
    return (
    <div>
      <h2>Number of IceCreams - {numOfIceCreams} </h2>
      <button onClick={dispatch}>Buy IceCream</button>
    </div>
  )
}

export default HooksIceCreamContainer
