import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { BUY_CAKE } from '../redux/cake/cakeTypes'


function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes)
  const buyCake = useDispatch(dispatch => BUY_CAKE)
  return (
    <div>
      <h2>Number of Cakes- { numOfCakes }</h2>
      <button>BuyCake!</button>
    </div>
  )
}

export default HooksCakeContainer
