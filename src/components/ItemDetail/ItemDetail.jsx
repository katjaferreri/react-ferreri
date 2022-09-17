import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'

export const ItemDetail = ({item}) => {
    
    const onAdd = (quantity) => {
        console.log(quantity)
    }

return (
    <article>
        <h1 className='title-itemDetail'>{item.title}</h1>
        <div className='card-detail'>
            <img src={item.img} alt={item.title} className='img-itemDetail'/>
        </div>
        <div className='card-detail-right'>
            <p>{item.description}</p>
            <p className='stock-itemDetail'>Stock: {item.stock}</p>
            <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
        </div>
    </article>
)
}