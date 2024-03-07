import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import AdminPage from './pages/AdminPage';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path = "/admin" element= {<AdminPage />}/>
          <Route exact path = "/addProduct" element= {<AddProduct />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
