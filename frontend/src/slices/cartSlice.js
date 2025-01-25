import { createSlice } from "@reduxjs/toolkit";

// const initialState = {  // Initial state of the cart    
//     cartItems: [],  // Array of cart items
//     shippingAddress: {},  // Shipping address
//     paymentMethod: ""  // Payment method
// };

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : { cartItems: [] };  // Initial state of the cart


const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

const cartSlice = createSlice({
    name: "cart",  // Slice name
    initialState,  // Initial state
    reducers: {
        addToCart: (state, action) => {  
            const item = action.payload;  // Payload
            
            const existingItem = state.cartItems.find((x) => x._id === item._id);  // Find the existing item
            if (existingItem) {  // If the item exists
                state.cartItems = state.cartItems.map((x) => x._id === existingItem._id ? item : x);  // Update the item
            } else {  // If the item does not exist
                state.cartItems = [...state.cartItems, item];  // Add the item
            }

            // calculate items price
            state.itemsPrice = addDecimal(state.cartItems.reduce((acc, item) => {
                return acc + item.price * item.qty;
            }, 0));

            // calculate shipping price (if order price is greater than 100, shipping is free else 10)
            state.shippingPrice = addDecimal(state.itemsPrice > 100 ? 0 : 10);

            // calculate tax price (15% tax)
            state.taxPrice = addDecimal(Number((0.15 * state.itemsPrice).toFixed(2))); 

            // calculate the total price (items price + shipping price + tax price)
            state.totalPrice = addDecimal(Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice));


            localStorage.setItem("cart", JSON.stringify(state));  // Save the cart to the local storage
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);  // Remove the item from the cart

            // calculate items price
            state.itemsPrice = addDecimal(state.cartItems.reduce((acc, item) => {
                return acc + item.price * item.qty;
            }, 0));

            // calculate shipping price (if order price is greater than 100, shipping is free else 10)
            state.shippingPrice = addDecimal(state.itemsPrice > 100 ? 0 : 10);

            // calculate tax price (15% tax)
            state.taxPrice = addDecimal(Number((0.15 * state.itemsPrice).toFixed(2)));

            // calculate the total price (items price + shipping price + tax price)
            state.totalPrice = addDecimal(Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice));

            localStorage.setItem("cart", JSON.stringify(state));  // Save the cart to the local storage
        }
    }    
}); 

export const { addToCart, removeFromCart } = cartSlice.actions;  // Export the addToCart action

export default cartSlice.reducer;  // Export the reducer