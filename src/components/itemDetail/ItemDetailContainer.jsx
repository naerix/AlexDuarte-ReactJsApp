
import React, {useState,useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import GridLoader from "react-spinners/CircleLoader";

export default function ItemDetailCointainer() {
  const [loading, setLoading] = useState(true);
    const [data, setData] = useState({})
    const {id}= useParams()
    useEffect(()=>{
        fetch('https://6319659c8e51a64d2be3b3db.mockapi.io/api/v1/products/')
        .then(res=>res.json())
        .then(json=> setData(json.find((item)=>item.id === id)))
        .catch((e)=> console.log(e))
        .finally(()=> setTimeout(()=>{
          setLoading(false)
        },1700));
      },[id]);

  return (loading? <div className='LoadrContainer'><GridLoader color={'#8d28f6'} loading={loading} size={90} /> <p className='LoadingText'>Cargando...</p></div>:
    <div>
        <ItemDetail data={data}/>
    </div>
  )
}