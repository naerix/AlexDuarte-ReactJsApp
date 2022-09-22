import React,{useState} from 'react'
import { Button, Typography} from '@mui/material'
import {db} from '../../firebase/Firebase'
import {useCart} from '../../context/CartContext'
import { serverTimestamp, collection,addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';
import successIcon from '../../assets/success-icon.png'


export default function CheckOut() {
    const [cliente, setCliente]=useState({})
    const {cart, cartTotal, clear}=useCart()
    const [orderId, setOrderId]=useState('')
    const [loading, setLoading]=useState(false)
    const navegar = useNavigate()

    const datosCliente = (e)=>{
        setCliente({
            ...cliente,
           [e.target.name]: e.target.value
        })
    }
    const finalizarCompra = (e)=>{
        e.preventDefault()
        clear()
        if(Object.values(cliente).length !== 3){
            toast.error('Error: Por favor complete todos los campos', {
                position: "top-center",
                autoClose: 1700,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            setLoading(true)
            const ventas = collection(db, "orders")
            addDoc(ventas,{
                cliente,
                items: cart,
                total: cartTotal(),
                date: serverTimestamp()
            })
            .then((res)=>{
                setOrderId(res.id)
                clear()
            })
            .catch((error)=>console.log('error'))
            .finally(()=>{
                setLoading(false)
            })
        }
        
    }
    if(loading){
        return <Loader loading={loading}/>
    }
  return (
    <div className='checkout'>
        
        <Typography variant='h5' sx={{
            fontWeight: 500,
            paddingBottom: 2
            }}>Finaliza tu compra</Typography>
                        <Typography variant='h5' sx={{
            fontWeight: 500,
            paddingBottom: 3
            }}>Por favor ingresa los siguientes datos</Typography>
        {!orderId?<form onSubmit={finalizarCompra} className='buyfn'>
            <input type="text" placeholder='Nombre y Apellido' name="name" onChange={datosCliente} className='imput_form'/>
            <input type="number" placeholder='Numero de telefono' name="phone" onChange={datosCliente} className='imput_form'/>
            <input type="email" placeholder='Email'name="email" onChange={datosCliente} className='imput_form'/>
            <Button type='submit' variant='contained' style={{backgroundColor:'#444'}}>Finalizar Compra</Button>
        </form>: <div className='buyfn'>
            <img src={successIcon} alt="success-Icon" className='succesIcon'/>
            <Typography variant='h7' sx={{
            fontWeight: 500,
            paddingBottom: 3
            }}>¡Compra Finalizada!</Typography>
            <Typography variant='h5' sx={{
            fontWeight: 500,
            paddingBottom: 3
            }}>su N° de orden es: {orderId}</Typography>
            <Button variant='contained' style={{backgroundColor:'#333', marginTop:'1rem'}} onClick={()=>navegar('/')}>Volver</Button>
        </div> }
        <ToastContainer theme='colored'/>
    </div>
  )
}
