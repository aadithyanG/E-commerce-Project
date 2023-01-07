import React, { Component } from "react";
// var today = new Date()

class Sideclass extends Component {
    render() {
        var today = new Date()
        
        const dateofBirth = new Date(this.props.dob)
        return (

            <div className="Sidebar">
                <div>
                    Name of the User-{this.props.Name}
                </div>
                <div>
                    Date of Birth-{this.props.dob}
                </div>
                <div>
                    age-{dateofBirth.getFullYear() - today.getFullYear()}
                </div>
            </div>
        )
    }
}
export default Sideclass