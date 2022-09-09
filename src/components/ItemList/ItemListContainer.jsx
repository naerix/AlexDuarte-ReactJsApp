import React, { useState, useEffect} from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [e, setE]= useState('error');
  const [loading, setLoading] = useState(true);
  const {categoryId}=useParams()

  useEffect(()=>{
    fetch('https://6319659c8e51a64d2be3b3db.mockapi.io/api/v1/products')
    .then(res=>res.json())
    .then(json=> { 
      if(categoryId){
        setItems(json.filter((item)=>item.category === categoryId))
      }
      else{
        setItems(json)
      }
    })
    .catch((e)=> console.log(e))
    .finally(()=> console.log('finalizo'));
  },[categoryId]);
  return (
    <div>
      <ItemList item={items}/>
    </div>
  )
}