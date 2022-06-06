import React from 'react'
import {useParams } from 'react-router-dom';
import { products } from '../products';


const Detail = () => {
    const {id} = useParams();
    const product = products.find((p)=>p.id === Number(id))
  return (
    <div>
        <h1>{product.title}</h1>
        <h3>{product.description}</h3>
    </div>
  )
}

export default Detail