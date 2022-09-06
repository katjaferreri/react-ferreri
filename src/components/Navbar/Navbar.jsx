import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Form } from '../Form/Form';

export const Navbar = () => {
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<div className="container-fluid">
  <a className="navbar-brand" href="#">Inicio</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav me-auto"/>
      <li className="nav-item">
        <a className="nav-link active" href="#">Perro</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Gato</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Carrito</a>
      </li>
      <li>
      <CartWidget/>
      </li>
      <Form contBuscar="Productos"/>
  </div>
</div>
</nav>
</div>
  );
}