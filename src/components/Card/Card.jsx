import React from 'react'
import { Count } from '../ItemCount/ItemCount'
import './Card.css'

export const Card = ({
    title = 'Producto de testeo',
    img = 'https://pbs.twimg.com/media/DcwoS-VWkAIB60j.jpg',
    description = 'producto de testeo',
    price = 600,
    stock = 10
}) => {
  return (
<div className="card-container text-light bg-dark mb-3" style={{maxWidth: '20rem'}}>
<div className="card-header">{title}</div>
    <div className="card-body">
      <div>
      <img className='img' src={img} alt={`Imagen del producto ${title}`} />
      </div>
      <p className='description'>{description}</p>
      <p className='price'>$ {price}</p>
      <p>Stock: {stock}</p>
        <Count stock={stock} />
    </div>
  </div>
  )
};
