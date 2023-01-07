import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../components/ReduxExample/Logic"
export default configureStore({
    reducer:{
        Counter:CounterReducer
    },
});