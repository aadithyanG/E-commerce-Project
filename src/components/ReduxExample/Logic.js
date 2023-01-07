import { createSlice } from "@reduxjs/toolkit";
export const CounterSlice=createSlice({
    name:'Counter',
    initialState:{
        value:0
    },
    reducers :{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        }
    }
})
export const {increment,decrement}=CounterSlice.actions
export const Selectcount=(state)=>state.Counter.value
export default CounterSlice.reducer
