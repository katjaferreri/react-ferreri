import React, { useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [count, setItemCount] = useState(initial)

    const addCounter = () => {
        count < stock && setItemCount( count + 1 )
    }

    const subtractCounter = () => {
        count > initial && setItemCount( count - 1 )
    }


  return (
    <div className='counter-container'>
        <p className='counter'>{count}</p>
        <div className='button-container'>
            <button className='button' onClick={subtractCounter}>-</button>
            <button className='button' onClick={addCounter}>+</button>
        </div>
    </div>
  )
}
