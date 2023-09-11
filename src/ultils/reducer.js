import { ADD_TO_CART, REMOVE_FROM_CART } from './action';

const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    const course = action.payload;
    switch (action.type) {
        case ADD_TO_CART: {
            const isExist = state.cart.find((item) => item.id === course.id);
            if (isExist) {
                return state;
            } else {
                return {
                    ...state,
                    cart: [...state.cart, course],
                };
            }
        }
        case REMOVE_FROM_CART: {
            const cart = state.cart.filter((item) => item.id !== course.id);
            return {
                ...state,
                cart,
            };
        }
        default:
            return state;
    }
};

export default cartReducer;
