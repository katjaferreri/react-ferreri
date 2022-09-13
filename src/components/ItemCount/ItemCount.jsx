import { React, useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({item}) => {

const [cantidad, setCantidad] = useState(1);

function agregarAlCarrito (item, cantidad) {
    const productoCarrito = {id: item.id, cantidad: cantidad}
    console.log(productoCarrito)
}
const cantidadProducto = (operacion) => {
    if (operacion == '+'){
    if (cantidad < item.stock) {
        setCantidad (cantidad + 1)
    }
    } else {
    if (cantidad > 1) {
        setCantidad (cantidad - 1)
    }
    }

return (
    <div>
        <button className='btn btn-primary' onClick={() => cantidadProducto ("+")}>
        +
        </button>
        <p>
        <button className='btn btn-secondary' onClick={() => cantidadProducto ("-")}>
        -
        </button>
        {cantidad}
        </p>
        <button className='btn btn-dark' onClick={() => console.log(agregarAlCarrito(item, cantidad))}>Comprar</button>
        </div>
)
}
}
