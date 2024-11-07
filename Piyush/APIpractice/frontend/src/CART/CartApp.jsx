import React from 'react'
import CartDisplay from './CartDisplay'
import CartFinal from './CartFinal'

function CartApp() {
  return (
    <>
    <h1>THIS IS THE DISPLAY</h1>
    <CartDisplay name = "laptop" price = {1000} />
    <CartDisplay name = "phone" price = {100} />
    <CartDisplay name = {"pen"} price = {10} />
    <CartFinal />
    </>
  )
}

export default CartApp
