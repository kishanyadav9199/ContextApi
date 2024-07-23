import React, { useContext } from 'react'
import { CartContext } from '../context/cart'
const Cart = () => {
const carts = useContext(CartContext)
const total= carts.items.reduce((a, b)=> a + b.price,0)
  return (
    <div className='w-40 h-40 rounded-xl ml-40 text-center '>
        <h1>Cart</h1>
        {
            carts && 
            carts.items.map((item) =>(
                 <li>
                    {item.name}-${item.price}
                </li>
                ))}

<h5>Total Bill:${total}</h5>

    </div>
  )
}

export default Cart
