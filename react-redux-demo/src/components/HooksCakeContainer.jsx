import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes)
  const buyCake =
  return (
    <div>
      <h2>Number of Cakes- { numOfCakes }</h2>
      <button>BuyCake!</button>
    </div>
  )
}

export default HooksCakeContainer
