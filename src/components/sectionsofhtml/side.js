import React from "react";
var d = new Date();
function Side(props) {
    const dob = new Date(props.dob);
    return (
        <div className="sidebar">
            <p>
                 UserName- {props.userName}
            </p>
            <p>
                DateOfBirth-{props.dob}
            </p>
            <p>
                Age-{dob.getFullYear() - d.getFullYear()}
            </p>
        </div>
    )

}
export default Side;