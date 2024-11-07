import React, { useContext } from 'react'
import { cartContext } from './CartContext'

function CartDisplay(props) {
    const cart = useContext(cartContext)
    console.log(cart);
    
  return (
    <>
    <h2>{props.name} - ${props.price}</h2>
    <button onClick={()=>{
        cart.setCarts([...cart.carts , {name : props.name , price : props.price}])
    }} >Add To Cart</button>
    </>
  )
}

export default CartDisplay
