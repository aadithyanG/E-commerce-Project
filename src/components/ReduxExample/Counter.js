import React from "react"
import {useSelector,useDispatch} from "react-redux"
import {increment,decrement,Selectcount} from "./Logic"
function Counter(){
    const Count=useSelector(Selectcount)
    const dispatch=useDispatch();
    return(
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <p>{Count}</p>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}
export  default Counter