import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  
function Userdisplay() {
     const [data,setData]=useState([])
     useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/users")
         .then((res)=>{
             setData(res.data)
         })
         .catch((err)=>{
             console.log(err)
         })
     })
     return (
         <>
         {
             data.map((ele)=>{
                 return(
                     <div key={ele.id}>
                     <h1>{ele.name}</h1>
                     <button><Link to={`/clickme/${ele.id}`}>Click me</Link></button>
                     </div>
                 )
             })
         }
         </>
     )
     
 }
 export default Userdisplay