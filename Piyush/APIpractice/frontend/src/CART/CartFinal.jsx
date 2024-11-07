import React from 'react'
import { useContext } from 'react'
import { cartContext } from './CartContext'

function CartFinal() {
    const cart = useContext(cartContext)
    const total = cart.carts.reduce((a,b) => a + b.price , 0)
  return (
    <>
      <h1>This is the List</h1>
      {
        cart && cart.carts.map((items)=>(
            <h1>{items.name} - ${items.price}</h1>
        ))
      }
      <h3>Total ${total}</h3>
    </>
  )
}

export default CartFinal
