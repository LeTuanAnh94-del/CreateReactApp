export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (course) => ({
    type: ADD_TO_CART,
    payload: course,
});

export const removeFromCart = (course) => ({
    type: REMOVE_FROM_CART,
    payload: course,
});
