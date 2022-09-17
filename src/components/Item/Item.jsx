import { React } from 'react'
import { Link } from 'react-router-dom';
import './Item.css';
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({item}) => {
  const {title, img, price, id} = item

  return (
    <div className='card-container'>
        <h4>{title}</h4>
        <div>
            <img className='img' src={img} alt={`Imagen del producto ${title}`} />
        </div>
        <p className='price'>$ {price}</p>
        <Link to={`/detalles/${id}`}>
        <button className='button-detail'>Ver más detalles</button>
        </Link>
        <ItemCount/>
    </div>
  )
}