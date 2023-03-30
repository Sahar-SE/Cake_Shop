import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyCake } from '../redux'


function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes- { numOfCakes }</h2>
      <button onClick={() =>}>BuyCake!</button>
    </div>
  )
}

export default HooksCakeContainer
