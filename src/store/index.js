// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';


import uiSlice from './ui-slice';
import cartSlice from './cart-slice';


// const counterReducer = (state = {counter : 0},action) => {

//     if (action.type === "INCREMENT") {
    const store = configureStore({
        // reducer: { counter: counterReducer, auth: authReducer },
        reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
      });
      

//         return {
//            counter : state.counter + 5
//        }
//     }
//     if (action.type === "DECREMENT") return {
//         counter : state.counter - 5
//     }
//     return state
// }

// const store = createStore(counterReducer)

export default store