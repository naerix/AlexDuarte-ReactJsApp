
import React, {useState,useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import {db} from '../../firebase/Firebase'
import { getDoc,doc, collection} from 'firebase/firestore';

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
  return (loading ? <Loader loading={loading}/> :
    <div>
        <ItemDetail data={data}/>
        <br />
    </div>
  )
}