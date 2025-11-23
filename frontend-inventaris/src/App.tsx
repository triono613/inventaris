import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import ProductForm from './components/productForm';
import ProductTable from './components/ProductTable';

function App() {
  return (
//  <Dashboard />
  <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}  />
        <Route path="/productForm" element={<ProductForm onCreated={() => {}}  />} />
         {/* <Route path="/productTable" element={<ProductTable products={[ ]} />}  /> */}
      </Routes>
    </Router>
  );
}

export default App;
