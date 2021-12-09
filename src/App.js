import React, { useState } from 'react';
import { CartProvider } from './contexts/CartContext';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartComponent } from './components/Cart/Cart';


function App() {
  const [currentItem, setCurrentItem] = useState(0)
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar counter="3" />
          <Routes>
            <Route exact path="/" element={<ItemListContainer name="Federico" setCurrentItem={setCurrentItem} />} />
            <Route exact path="/categories/:categoryID" element={<ItemListContainer name="Federico" setCurrentItem={setCurrentItem} />} />
            <Route path="items/:itemID" element={<ItemDetailContainer itemId={currentItem} />} />
            <Route path="cart" element={<CartComponent />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;