import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../actions/cartAction';

const ProductCard = ({ currentProduct }) => {
    const dispatch = useDispatch();
    const myStateOfProduct = useSelector((state) => state.cartReducer);
    console.log(myStateOfProduct);

    const {
        title,
        type,
        description,
        filename,
        height,
        width,
        price,
        rating,
        id,
    } = currentProduct;

    const addToCart = () => {
        const quantity = document.getElementById(id)?.value;
        const prepareData = { ...currentProduct, quantity };
        dispatch(addCart(prepareData));
    };

    return (
        <div key={id} className="col-xs-12 col-sm-6 col-md-4 single-card">
            <img
                src={filename}
                height={height}
                width={width}
                className="card-img-top"
                alt="card-img"
            />
            <div className="card-body">
                <h5 className="card-title">{`Title : ${title}`}</h5>
                <h5 className="card-title">{`Type : ${type}`}</h5>
                <p className="card-text">{`Description : ${description}`}</p>
                <h5>
                    {`Rating : ${rating}`}&nbsp;
                    <i className="fa fa-solid fa-star"></i>
                </h5>
                <h5>{`Price : ₹${price}`}</h5>
                <div className="button-container">
                    <div>
                        <select
                            className="form-select h-100"
                            id={id}
                            aria-label="Default select example"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => addToCart()}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
