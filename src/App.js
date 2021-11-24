import React, { Component, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [currentItem, setCurrentItem] = useState(0)
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar counter="3"/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer name="Federico" setCurrentItem={setCurrentItem}/>} />
            <Route path="items/:itemID" element={<ItemDetailContainer itemId={currentItem} />} />
          </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;