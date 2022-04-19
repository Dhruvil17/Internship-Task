import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const addedProducts = useSelector((state) => state.cartReducer);

    const navigate = useNavigate();

    const home = () => {
        navigate('/Internship-Task');
    };

    const product = () => {
        navigate('/Internship-Task/product');
    };

    const cart = () => {
        navigate('/Internship-Task/cart');
    };

    return (
        <div className="sticky-navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container-fluid">
                    <div
                        className="navbar-brand nav-link"
                        style={{ cursor: 'pointer' }}
                        onClick={home}
                    >
                        LOGO
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <div
                                    className="nav-link"
                                    aria-current="page"
                                    style={{ cursor: 'pointer' }}
                                    onClick={home}
                                >
                                    Home
                                </div>
                            </li>
                            <li className="nav-item">
                                <div
                                    className="nav-link"
                                    style={{ cursor: 'pointer' }}
                                    onClick={product}
                                >
                                    Products
                                </div>
                            </li>
                            <li className="nav-item">
                                <div
                                    className="nav-link"
                                    style={{ cursor: 'pointer' }}
                                    onClick={cart}
                                >
                                    Cart
                                    <span>
                                        {addedProducts.length > 0 &&
                                            addedProducts.length}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
