import React, { useState, useEffect} from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import GridLoader from "react-spinners/CircleLoader";

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
    .finally(()=> setTimeout(()=>{
      setLoading(false)
    },1700));
  },[categoryId]);
  return ( loading? <div className='LoadrContainer'><GridLoader color={'#8d28f6'} loading={loading} size={90} /> <p className='LoadingText'>Cargando...</p></div>:
  <div>
      <ItemList item={items}/>
  </div>
  )
}