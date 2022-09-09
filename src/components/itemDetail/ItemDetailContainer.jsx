
import React, {useState,useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailCointainer() {
    const [data, setData] = useState({})
    const {id}= useParams()
    useEffect(()=>{
        fetch('https://6319659c8e51a64d2be3b3db.mockapi.io/api/v1/products/')
        .then(res=>res.json())
        .then(json=> setData(json.find((item)=>item.id === id)))
        .catch((e)=> console.log(e))
        .finally(()=> console.log('carga completada'));
      },[id]);

  return (
    <div>
        <ItemDetail data={data}/>
    </div>
  )
}