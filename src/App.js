import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailCointainer from './components/itemDetail/ItemDetailContainer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <ItemDetailCointainer/>
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
