const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return [...state, action.payload];
        case 'UPDATE_QUANTITY':
            return state.map((content, i) =>
                content.id === action.payload.id
                    ? {
                          ...content,
                          quantity: action.payload.quantity,
                      }
                    : content
            );
        default:
            return state;
    }
};

export default cartReducer;
