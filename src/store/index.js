// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';


import counterReducer from './counter';
import authReducer from './auth';

// const counterReducer = (state = {counter : 0},action) => {

//     if (action.type === "INCREMENT") {
    const store = configureStore({
        reducer: { counter: counterReducer, auth: authReducer },
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