import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function HooksIceCreamContainer() {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch(dispatch => dispatch(buyIceCream()))
    return (
    <div>
      <h2>Number of IceCreams - </h2>
      <button>Buy IceCream</button>
    </div>
  )
}

export default HooksIceCreamContainer
