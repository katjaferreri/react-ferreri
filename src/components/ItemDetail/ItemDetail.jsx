import { ItemCount } from '../Count/Count'
import './ItemDetail.css'

export const ItemDetail = ({item}) => {
    
    const onAdd = (quantity) => {
        console.log(quantity)
    }

return (
    <article>
        <h1>{item.title}</h1>
        <div className='card-detail'>
            <img src={item.img} alt={item.title} className='img'/>
        </div>
        <div className='card-detail-right'>
            <p>{item.description}</p>
            <p>Stock: {item.stock}</p>
            <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
        </div>
    </article>
)
}