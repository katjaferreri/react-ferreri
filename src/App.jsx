import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navbar} from './components/Navbar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {Contacto} from './components/Contacto/Contacto';

const App = () => {

  return (
<div><BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/Contacto' element={<Contacto/>}></Route>
          <Route path="*" element={<h1>Error 404</h1>}></Route>
        </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;