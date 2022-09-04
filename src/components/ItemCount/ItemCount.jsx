import React, { useState } from 'react'
import './ItemCount.css'

export const Count = ({stock, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0)

    const addCounter = () => {
        count < stock && setCount( count + 1 )
    }

    const subtractCounter = () => {
        count > initial && setCount( count - 1 )
    }

    const clean = () => {
        setCount (0)
    }

    const confirmar = (count) => {
        console.log (`Se han seleccionado ${count} productos`)
      }

  return (
    <div className='counter-container'>
        <p className='counter'>{count}</p>
        <div className='button-container'>
            <button className='button' onClick={subtractCounter}>-</button>
            <button className='button' onClick={addCounter}>+</button>
        </div>
        <div className= 'button-container2'>
            <button className='btn btn-danger' onClick={clean}>limpiar</button>
            <button className='btn btn-primary' onClick= {() => confirmar (count)} >confirmar</button>
        </div>
    </div>
  )
}