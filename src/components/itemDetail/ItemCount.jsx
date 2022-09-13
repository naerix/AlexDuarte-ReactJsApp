import React, {useState, useEffect } from 'react'

import Button from '@mui/material/Button';



export default function ItemCount({stock, onAdd, contador, setContador, initial}) {

  

  const sumar = ()=>{
    if(contador < stock ){
      setContador(contador+1)
    }
  }

  const restar = ()=>{
    if(contador > initial){
      setContador(contador-1)
    }
  }
  return (

    <div>
      <div className="item-div">
      <div className="item-qty">
        <Button style={{ fontSize: '1.7rem  ',backgroundColor:'rgb(56 56 56)', Padding:'0'}} variant="contained" onClick={restar} >
          -
        </Button>
        <p className='counter'>{contador}</p>
        <Button style={{ fontSize: '1.7rem  ',backgroundColor:'rgb(56 56 56)'}}  variant="contained"
          onClick={sumar}
        >
          +
        </Button>
      </div>
      <Button variant="contained" style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}} onClick={onAdd} >
          Agregar al Carrito
      </Button>
      
    </div>
        
    </div>
  )
}