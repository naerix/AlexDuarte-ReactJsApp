import React from 'react'
import CircleLoader from "react-spinners/CircleLoader";

export default function Loader({loading}) {
  return (

    <div className='LoadrContainer'>

        <CircleLoader color={'#8d28f6'} loading={loading} size={90} /> 
        <p className='LoadingText'>Cargando...</p>
    </div>
  )
}
