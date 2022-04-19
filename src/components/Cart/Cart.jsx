import React from 'react';
import { useSelector } from 'react-redux';
import CartProducts from '../CartProducts/CartProducts';
import './Cart.css';

const Cart = () => {
    const addedProducts = useSelector((state) => state.cartReducer);
    let temp = 0;
    let totalPrice = 0;
    for (let i = 0; i < addedProducts.length; i++) {
        temp += addedProducts[i].price * Number(addedProducts[i].quantity);
    }
    totalPrice = Number(temp).toFixed(2);
    return (
        <div className="container-fluid mt-2">
            <div className="row text-center">
                {addedProducts.length > 0 &&
                    addedProducts.map((currentProduct) => {
                        return <CartProducts currentProduct={currentProduct} />;
                    })}
            </div>
            <div className="total-price">
                {parseInt(totalPrice) !== 0 && (
                    <h3>Total Price is : {totalPrice}</h3>
                )}
                {console.log(typeof parseInt(totalPrice))}
            </div>
        </div>
    );
};

export default Cart;
