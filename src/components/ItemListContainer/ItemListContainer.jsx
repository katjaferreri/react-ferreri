import { React, useEffect, useState, useContext } from 'react';
import { products } from '../../mock/products';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { DarkModeContext } from '../Context/DarkModeContext.jsx';

export const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const {darkMode, toggleDarkMode} = useContext (DarkModeContext);

  const cambiarDarkMode = () => {
    toggleDarkMode()
  }
    
  const {categoria} = useParams ()

  const getProducts = new Promise((resolve, reject) => {
    if (categoria) {
      setTimeout(()=> resolve(products.filter (item => item.categoria === categoria)), 2000)
    } else {
      setTimeout(()=> resolve(products), 2000)
    }
  })

  useEffect(() => {
    getProducts
    .then(products => setProductList(products))
    .catch(error => console.error(error))

    return () => {
      setProductList([])
    }
  }, [categoria])  

  return (  
    <>
      <div className={darkMode ? 'darkMode row' : 'lightMode row'}>
      <button className={darkMode ? 'btn btn-light' : 'btn btn-dark'} onClick={() => toggleDarkMode()}> Cambiar modo</button>
      {productList ? <ItemList productList={productList} /> : <h1>Cargando....</h1>}
      </div>
    </>
  )
  } 
