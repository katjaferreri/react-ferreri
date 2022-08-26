import React from 'react';
import "./CartWidget/CartWidget.css"
import {Navbar} from './Navbar/Navbar';
import {ItemListContainer} from './ItemListContainer.jsx/ItemListContainer';
import {ItemCount} from './ItemCount/ItemCount';

export const App = () => {
  return (
    <>
        <Navbar/>
        <ItemListContainer/>
        <ItemCount/>
        </>
  )
}
