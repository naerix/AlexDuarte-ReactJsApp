import { Button, Typography } from '@mui/material'
import React from 'react'
import sadIcon from '../../assets/1422893.png'
import { useNavigate } from 'react-router-dom'

export default function CartEmpty() {
    const navegar =useNavigate()
  return (
    <div className='Cart-empty'>
        <img src={sadIcon} alt="sad-Icon" className='Cart-empty__img'/>
        <Typography variant="h4" sx={{
            fontWeight: 700,
            }}>
            Tu carrito esta vacio!
        </Typography>
        <Typography variant="h6" sx={{
            fontWeight: 400,
            paddingBottom: 3
            }}>
            Te invitamos a ver nuestros productos.
        </Typography>
        <Button variant='contained' onClick={()=>navegar('/')} style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}}>Ver Productos</Button>
    </div>
  )
}
