import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
export const ItemListContainer = () => {
  function confirmar (count) {
    console.log (`Se han seleccionado ${count} productos`)
  }
  return (
    <>
    <ItemCount stock = {10} confirmar = {confirmar} />
    </>
  )
}

