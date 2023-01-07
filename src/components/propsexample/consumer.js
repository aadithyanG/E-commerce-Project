import React from "react";
import './consumer.css';

const style={"background":'red'}
function ChildComponent(props){
    return(
        <li style={style}>{props.FirstName} {props.LastName}</li>
    );
}
// function ChildComponent({FirstName,LastName}){
//     return(
//         <li style={style}>{FirstName} {LastName}</li>
//     );
// }
export default ChildComponent;