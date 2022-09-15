import { React, useEffect, useState } from 'react';
import { products } from '../../mock/products';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

const { id } = useParams();
const [item, setItem] = useState({});
const getProduct = new Promise((resolve, reject) => {
setTimeout(() => resolve(products.find((detalles) => detalles.id == id)),2000);
});

useEffect(() => {
getProduct.then((response) => setItem(response));
}, []);

return <>{item ? <ItemDetail item={item} /> : <h1>Cargando..</h1>}</>;
};