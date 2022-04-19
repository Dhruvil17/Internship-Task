import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Card.css';

const Card = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch(
            'https://api4286.s3.ap-south-1.amazonaws.com/products.json'
        );
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container-fluid mt-2 card">
            <div className="row text-center">
                {products.map((currentProduct) => {
                    return <ProductCard currentProduct={currentProduct} />;
                })}
            </div>
        </div>
    );
};

export default Card;
