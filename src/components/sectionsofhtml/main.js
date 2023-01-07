import React from "react";
import Side from "./side";


function Main() {
    return (
        <div className="middlebox">

            <div className="side-container">
                <Side 
                    userName="Aadi"
                    dob="1999-07-07"
                />
                <Side
                    userName="Jagan"
                    dob="2002-09-08"
                />
                <Side
                    userName="Sabith"
                    dob="1997-09-07"
                />
                <Side 
                    userName="Aadi"
                    dob="1999-07-07"
                />
                
            </div>
            <div className="main-content">
                main container
             
            </div>
        </div>
    )
}
export default Main;