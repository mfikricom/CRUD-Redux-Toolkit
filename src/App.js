import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ShowProduct from './components/ShowProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
