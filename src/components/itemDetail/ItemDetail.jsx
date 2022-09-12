import React, {useState} from 'react'
import ItemCount from './ItemCount';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


export default function ItemDetail({data}) {
  const {image,title,description,price,stock} = data
  const [initial, setInitial]=useState(1)
  const onAdd= ()=>{
    alert('Se agrego al carrito')
  }
  return (
    <div>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="m">
        <div className='prod-div'>
          <img src={image} alt={title} className="prod-img"/>
          <div className='info-div'>
            <h2>{title}</h2>    
            <p>{description}</p>
            <h4 style={{fontSize:'1.6rem'}}>${price}</h4>
            <ItemCount  stock={stock} initial={initial} onAdd={onAdd}/>
          </div>
          
        </div>
      </Container>
    </React.Fragment>
    </div>
  )
}