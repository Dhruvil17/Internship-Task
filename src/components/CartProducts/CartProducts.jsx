import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../actions/cartAction';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartProducts = ({ currentProduct }) => {
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
        quantity,
    } = currentProduct;

    const dispatch = useDispatch();

    const addMore = () => {
        if (Number(quantity) >= 10) {
            console.log('Can not add the item now');
        } else {
            const updatedQuantity = Number(quantity) + 1;
            const payload = { id: id, quantity: updatedQuantity };
            dispatch(updateQuantity(payload));
        }
    };

    const addLess = () => {
        if (Number(quantity) === 1) {
            console.log('Can not remove the item now');
        } else {
            const updatedQuantity = Number(quantity) - 1;
            const payload = { id: id, quantity: updatedQuantity };
            dispatch(updateQuantity(payload));
        }
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
                <h5>{`Price : ₹${Number(price * Number(quantity)).toFixed(
                    2
                )}`}</h5>
                <h4>
                    <button onClick={addLess}>
                        <RemoveIcon />
                    </button>
                    &nbsp;
                    {quantity}
                    &nbsp;
                    <button onClick={addMore}>
                        <AddIcon />
                    </button>
                </h4>
            </div>
        </div>
    );
};

export default CartProducts;
