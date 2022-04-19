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
                    <Route path="/Internship-Task" element={<Home />} />
                    <Route
                        path="/Internship-Task/product"
                        element={<Product />}
                    />
                    <Route path="/Internship-Task/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
