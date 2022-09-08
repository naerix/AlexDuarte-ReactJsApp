
import React, {useState,useEffect} from 'react'
import ItemDetail from './ItemDetail';

export default function ItemDetailCointainer() {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch('https://6319659c8e51a64d2be3b3db.mockapi.io/api/v1/products/1')
        .then(res=>res.json())
        .then(json=> setData(json))
        .catch((e)=> console.log(e))
        .finally(()=> console.log('carga completada'));
      },[]);

  return (
    <div>
        <ItemDetail data={data}/>
    </div>
  )
}