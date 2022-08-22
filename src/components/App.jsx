import React from 'react';
import Navbar from './Navbar/Navbar';
import {ItemListContainer} from './ItemListContainer.jsx/ItemListContainer';

const App = () => {
  return (
    <>
        <Navbar/>
        <ItemListContainer title="titulo" subtitle="subtitulo"/>
    </>
  )
}

export default App;