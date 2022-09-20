import React from 'react'
import { useCart } from '../../context/CartContext'
import CartEmpty from './CartEmpty'
import CartContent from './CartContent'


export default function Cart() {
  const{cart}= useCart()
  console.log(cart)
  return (
    <div className='CartContainer'> 
      {!cart.length? <CartEmpty/>:<CartContent/>}
    </div>
  )
}
