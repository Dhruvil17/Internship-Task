export function addCart(data) {
    return (dispatch) => {
        return dispatch({
            type: 'ADD_CART',
            payload: data,
        });
    };
}

export function updateQuantity(data) {
    return (dispatch) => {
        return dispatch({
            type: 'UPDATE_QUANTITY',
            payload: data,
        });
    };
}
