import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({productList}) => {

  return (
    <div style={{display: 'flex', gap: '2rem'}}>
      {
        productList.map(item => <Item key={item.id} item={item}/>)
      }
    </div>

  )
}