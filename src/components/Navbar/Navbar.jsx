import { React } from 'react';
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget';
import { Form } from '../Form/Form';

export const Navbar = () => {
    return (
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation"></button>
      <div className="collapse navbar-collapse" id="navbarColor01">
           <ul className="navbar-nav me-auto">
             <li className="nav-item">
             <Link to='/'>
       <li>Inicio</li>
       </Link>
       </li>
       <li className="nav-item">
       <Link to='/categoria/gato'>
       <li>Gato</li>
       </Link>
       </li>
       <li className="nav-item">
       <Link to='/categoria/perro'>
       <li>Perro</li>
       </Link>
       </li>
       <li>
     <CartWidget/>
     </li>
     <li>
     <Form contBuscar="Productos"/>
     </li>
       </ul>
       </div>
       </div>
       </nav>
       </header>
  );
}