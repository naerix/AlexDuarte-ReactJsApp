import React, { useState, useEffect} from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import GridLoader from "react-spinners/CircleLoader";
import Loader from '../Loader/Loader';
import {db} from '../../firebase/Firebase'
import { getDocs, collection, query, where} from 'firebase/firestore';

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [e, setE]= useState('error');
  const [loading, setLoading] = useState(true);
  const {categoryId}=useParams()
  
  //Firebase
  useEffect(()=>{
    const productos = categoryId? query(collection(db, "products"),where("category", "==", categoryId)) :collection(db, "products")
    getDocs(productos)
    .then((res)=>{
      const list = res.docs.map((product)=>{
        return {
          id: product.id, ...product.data()
        }
      })
      setItems(list)
    })
    .catch((e)=> console.log(e))
    .finally(()=> setLoading(false));
  }, [categoryId])
  return ( loading? <Loader loading={loading}/> :
  <div className='list-container'>
      <ItemList item={items}/>
  </div>
  )
}