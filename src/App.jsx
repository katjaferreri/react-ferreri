import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar'


function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
        <Route path='/detalles/:id' element={<ItemListContainer/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
