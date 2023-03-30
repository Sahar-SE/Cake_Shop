import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { BUY_CAKE } from '../redux/cake/cakeTypes'
import { buyCake } from '../redux'


function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes)
  const buyCake = useDispatch(dispatch => buyCake)
  return (
    <div>
      <h2>Number of Cakes- { numOfCakes }</h2>
      <button onClick={buyCake}>BuyCake!</button>
    </div>
  )
}

export default HooksCakeContainer
