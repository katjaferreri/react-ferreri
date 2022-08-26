import {React, useState} from 'react'

export const ItemCount = ({stock, confirmar}) => {
    const [count, setCount] = useState(0);

    function sumar () {
      if (count < stock) {
        setCount (count + 1)
      }
    }

    function restar () {
        if (count > 0) {
            setCount (count - 1)
        }
    }

    function limpiar () {
            setCount (0)
    }

  return (
    <>
    <p>Stock: {stock} </p>
    <p>Cantidad: {count} </p>
  <button className='btn btn-primary' onClick= {sumar} > + </button>
  <button className='btn btn-secondary' onClick= {restar} > - </button>
  <button className='btn btn-dark' onClick= {limpiar} > limpiar </button>
  <button className='btn btn-light' onClick= {() => confirmar (count)} > confirmar</button>
  </>
  )
}
