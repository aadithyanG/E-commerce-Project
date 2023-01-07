import React from "react"
import ChildComponent from "./consumer";
function ParentComponent() {
    return (
        // const style={background-color:'red'}
        <>
            <h1 style={{ color: 'red' }}>Hellow world</h1>
            <ul>
                <ChildComponent
                    FirstName="Jagan"
                    LastName="Ranganathan"
                    age={30}
                    gender="Male"
                />
                <ChildComponent FirstName="sabith" LastName="Ranganathan" />
            </ul>
        </>
    )
}
export default ParentComponent;