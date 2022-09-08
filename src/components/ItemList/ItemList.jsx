import React, {useState, useEffect} from 'react'
import Item from './Item';
import './ItemListCards.css'


export default function ItemList({item}) {

 
  return (
    <div className='Cards-Container'>
      {item.map( (items) => {
        return( <Item key={item.id} itemProp={items}/>)
      })}
    </div>
    
  )
}