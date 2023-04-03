import React from 'react'

function ItemContainer() {
    return (
      <div>
        <h2>Item - {props.item}</h2>
      </div>
    )
  }

  const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream

    return {
        item: itemState
    }

  }
  
  export default ItemContainer
