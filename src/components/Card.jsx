import React from 'react'
import p1 from '../assets/img/product1.png'

const Card = ({prod}) => {
  return (
    <div className="col-md-4">
          <div class="card">
            <img src={p1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{prod.title}</h5>
              <p class="card-text">{prod.description}</p>
              <a href="#" class="btn btn-primary">PKR {prod.price}/-</a>
            </div>
          </div>
    </div>
  )
}

export default Card