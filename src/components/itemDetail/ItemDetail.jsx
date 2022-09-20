import React, {useState} from 'react'
import ItemCount from './ItemCount';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../../context/CartContext';

export default function ItemDetail({data}) {
  const navigate = useNavigate();
  const [compra, setCompra]=useState(false)
  const {id,image,title,description,price,stock} = data
  const [initial, setInitial]=useState(1)
  const [contador, setContador]=useState(initial)
  const {addItem}=useCart()
  const onAdd= ()=>{

    let onCart = {
      id,
      title,
      price,
      stock,
      image,
      cantidad: contador
    }
    addItem(onCart);
    setCompra(true);

    toast('Se agrego al carrito', {
      position: "top-center",
      autoClose: 1700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  return (
    <div className='Detail-Container'>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="m" sx={{ minWidth: 200 }}>
        <div className='prod-div'>
          <img src={image} alt={title} className="prod-img"/>
          <div className='info-div'>
            <h2>{title}</h2>    
            <p>{description}</p>
            <h4 style={{fontSize:'1.6rem'}}>${price}</h4>
            {!compra? <ItemCount  stock={stock} onAdd={onAdd} contador={contador} setContador={setContador} initial={initial}/>:
            <div> 
              <Button variant="contained" onClick={()=>navigate('/')} style={{backgroundColor:'rgba(0, 0, 0, 0.87)', marginRight:'1rem'}}>Seguir Comprando</Button>
              <Button variant="contained"  onClick={()=>navigate('/cart')} style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}}>Ir al carrito </Button>
            </div>} 
          </div>
          <ToastContainer theme='dark'/>
        </div>
      </Container>
    </React.Fragment>
    </div>
  )
}