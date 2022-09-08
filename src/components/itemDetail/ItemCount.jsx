import React, {useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { margin } from '@mui/system';


export default function ItemCount({stock}) {

    const [initial,setInitial] = useState(1);
    const [stocks, setStock] = useState(stock);

    const onAdd = ()=>{
      alert("Se ha agregado al carrito")
    };


    const [contador, setContador] = useState(initial);

    const agregar = ()=>{
        if(contador < stocks){
            setContador(contador + 1)
        }
    }
    const disminuir = ()=>{
        if(contador > initial){
            setContador(contador -1)
        }
    }

  return (

    <div>
        <div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <Button variant="contained" style={{backgroundColor:'green'}} onClick={disminuir}>-</Button>
                <span style={{fontSize:"1.5rem", fontWeight:"600", margin:"1rem"}}>{contador}</span>
                <Button variant="contained" size="small" style={{backgroundColor:'red'}} onClick={agregar}>+</Button>
            </div>
            <div>
                <br />
                <Button variant="contained" onClick={onAdd}>Agregar al carrito</Button>
            </div>
            
        </div>
    </div>
  )
}