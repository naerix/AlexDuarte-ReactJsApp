import React, { useState, useEffect} from 'react'
import ItemList from './ItemList';

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [e, setE]= useState('error');
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    fetch('https://6319659c8e51a64d2be3b3db.mockapi.io/api/v1/products')
    .then(res=>res.json())
    .then(json=> setItems(json))
    .catch((e)=> console.log(e))
    .finally(()=> console.log('finalizo'));
  },[]);
  return (
    <div>
      <ItemList item={items}/>
    </div>
  )
}