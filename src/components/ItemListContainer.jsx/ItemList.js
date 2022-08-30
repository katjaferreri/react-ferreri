import {React, useState, useEffect} from 'react';

const productos = [
    {id:1, nombre: "fideos", marca: "matarazzo", precio: 300, stock: 15},
    {id:2, nombre: "arroz", marca: "gallo oro", precio: 300, stock: 20},
    {id:3, nombre: "cafe", marca: "cabrales", precio: 1500, stock: 5},
    {id:4, nombre: "te", marca: "green hills", precio: 1000, stock: 10},
]

function consultarPromesa (confirmacion) {
    return new Promise ((res, rej) => {
        if (confirmacion) {
            res (productos)
        } else {
            rej ("acceso denegado")
        }
    })
}

export const Productos = () => {
    const [productos, setProductos] = useState ([]);
    useEffect(() => {
        consultarPromesa (true)
        .then (data => {
            const productosJSX = data.map ((producto, indice) =>
            <div className="card text-white bg-primary mb-3" key={indice} style={{maxWidth: '20rem', margin:"5px"}}>
            <div className="card-header">{producto.nombre}</div>
            <div className="card-body">
            <p className="card-text">Marca: {producto.marca}</p>
            <p className="card-text">Precio: ${producto.precio}</p>
            <p className="card-text">Stock: {producto.stock}</p>
            </div>
        </div>
)

console.log(productosJSX)

setProductos(productosJSX)

})
.catch (error => {
    console.error(error)
})
    }, []);

return (
    <div className = "row">
        {productos}
    </div>
);
}

