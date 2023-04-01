import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyCake } from '../redux'


function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes by Hooks - { numOfCakes }</h2>
      <button onClick={() => dispatch(buyCake())}>BuyCake!</button>
    </div>
  )
}

export default HooksCakeContainer
