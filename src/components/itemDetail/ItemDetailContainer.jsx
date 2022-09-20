
import React, {useState,useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import GridLoader from "react-spinners/CircleLoader";
import Loader from '../Loader/Loader';
import {db} from '../../firebase/Firebase'
import { getDocs, getDoc,doc, collection, query, where} from 'firebase/firestore';

export default function ItemDetailCointainer() {
  const [loading, setLoading] = useState(true);
    const [data, setData] = useState({})
    const {id}= useParams()

    useEffect(()=>{
      const productColection = collection(db, "products")
      const refDoc= doc(productColection, id)
      getDoc(refDoc)
      .then((res)=>{
        setData({
          id:res.id,
          ...res.data()
        })
      })
      .catch((e)=> console.log(e))
        .finally(()=>setLoading(false));
    },[id])
    /*useEffect(()=>{
        fetch('https://6319659c8e51a64d2be3b3db.mockapi.io/api/v1/products/')
        .then(res=>res.json())
        .then(json=> setData(json.find((item)=>item.id === id)))
        .catch((e)=> console.log(e))
        .finally(()=> setTimeout(()=>{
          setLoading(false)
        },1700));
      },[id]);*/

  return (loading ? <Loader loading={loading}/> :
    <div>
        <ItemDetail data={data}/>
    </div>
  )
}