import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceCreamContainer() {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()

    return (
    <div>
      <h2>Number of IceCreams by Hooks - {numOfIceCreams} </h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default HooksIceCreamContainer
