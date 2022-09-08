import React, {useState} from 'react'
import ItemCount from './ItemCount';


export default function ItemDetail({data}) {
  const {image,title,description,price,stock} =data
  return (
    <div>
        <div>
            <img src={image}  style={{width:'450px', height:'auto'}} />
            <p>{title}</p>
            <p>{description}</p>
            <p>${price}</p>
            <ItemCount stock={stock}/>
        </div>
    </div>
  )
}