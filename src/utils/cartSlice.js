import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // addItem is dispatch(action) and () => {} this is the reducer function
        addItem: (state, action) =>{
            // Vanialla (older) redux => don't mutate state, returning was mandatory 
            // const newState = [...state];
            // newState.item.push(action.payload)
            // return newState;

            //In latest Redux Toolkit we have to mutate the state note redux is still doing the old above logic behind the scenes and not asking the developers to do, redux uses immer library to do these things behind the scenes
            // mutating the state here 
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        // originalState = {items: ["pizza"]} 
        clearCart: (state, action) => {
            console.log(state) // [pizza]
            console.log(current(state))
        // state = []
        // console.log(state)   // [] it will only make this local state empty but the ["pizza"] will remain the same
            state.items.length = 0; // or return {items: []} this new object will be replaced inside originalState = {item: []}

            // ReduxTool kit say either mutate the existing state or return a new state 
            
            // state.items.length = [] or ["akshay"]; this will not work when we do this we are not modifying the state we just changing the reference to it you are not mutating the state it just adding the reference to it so in this case you have to mutate the state like state.items.length = 0; this state is a local variable it will have the value of original state you have to modify it  and if you do something like this state = [] it will change the value of this state and this state is a local variable and it will to the changes locally it will not modify the actual state which was passed in the parameter
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions; 
// here we are taking out these actions individually, and exporting it.

export default  cartSlice.reducer;
// so cartSlice is kind of like a big object which have actions and reducers so we are doing export default  cartSlice.reducer; we are giving the reducer 
// A reducer is the combination of many small reducers cart.reducer is the combination of above reducers (that is why it is written as reducers )
