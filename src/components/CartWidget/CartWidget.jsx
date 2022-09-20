import React, {useState, useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink}   from 'react-router-dom'; 
import { useCart } from '../../context/CartContext'

function CartWidget() {
  const {cartCuantity} = useCart()
  return (
      <IconButton  component={RouterLink} to={'cart'}>
        <ShoppingCartIcon fontSize="medium" className='Cart-Widget'/>
        { cartCuantity() ? <span className='cartCuantity'>{cartCuantity()}</span> : null}
      </IconButton>
  )
}

export default CartWidget