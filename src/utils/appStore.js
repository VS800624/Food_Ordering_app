import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"


const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;

// Note this reducer is a big reducer which contain small reducers like cartReducer

// this appStore is the combination of this small reducer (cartReducer )