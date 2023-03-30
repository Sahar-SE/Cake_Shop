import React from 'react'
import { useSelector } from 'react-redux'


function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes)
  return (
    <div>
      <h2>Number of Cakes-</h2>
      <button>BuyCake!</button>
    </div>
  )
}

export default HooksCakeContainer
