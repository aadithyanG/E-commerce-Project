import axios from "axios";
import React, { useEffect, useState } from "react";
function APIcall() {
    const [data, setData] = useState([])
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setData(res.data)
                setLoading(false)
                console.log(res)
            })
            .catch((err) => {
                console.log("err")
            })
        
    })
    return (
        <>
        {loading && <h1>Loading.......</h1>}
            {
                data.map((ele) => {
                    return (
                        <div key={ele.id}>
                            <h1>
                                {ele.name}
                            </h1>
                            <small>
                                {ele.username}
                            </small>
                            <p>
                                {ele.address.zipcode}
                            </p>
                        </div>
                    )
                })
            }   
        </>
    )
    
    }
export default APIcall