import React, {useState} from 'react'
import {products} from '../products'
import Card from '../components/Card'

const Home = () => {
    const [product, setProduct] = useState(products)
  return (
    <div className="row">
        {
          product.map(p=><Card prod={p}/>)
        }
    </div>
  )
}

export default Home