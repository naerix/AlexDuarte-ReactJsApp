import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailCointainer from './components/itemDetail/ItemDetailContainer';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detalle/:id' element={<ItemDetailCointainer />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
