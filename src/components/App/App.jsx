import React from 'react';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import './App.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
