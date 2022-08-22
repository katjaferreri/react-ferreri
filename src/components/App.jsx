import React from 'react';
import "./CartWidget/CartWidget.css"
import {Navbar} from './Navbar/Navbar';
import {ItemListContainer} from './ItemListContainer.jsx/ItemListContainer';

export const App = () => {
  return (
    <>
        <Navbar/>
        <ItemListContainer title="titulo" subtitle="subtitulo"/>
    </>
  )
}
