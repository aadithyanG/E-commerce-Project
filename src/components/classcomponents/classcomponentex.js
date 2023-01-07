import React,{Component} from "react";
import Sideclass from "./sideclass";
class ClassExample extends Component{
    render(){
        return (
            
                <div className="middlebox">
                    <div className="side-container">
                    <Sideclass
                    Name="Aadi"
                    dob="1999-07-07"
                    />
                    <Sideclass
                    Name="Sabith"
                    dob="2001-09-07"
                    />
                    <Sideclass
                    Name="Aadi"
                    dob="1996-10-07"
                    />
                    <Sideclass
                    Name="Sabith"
                    dob="2004-12-07"
                    />
                    
                    
                    </div>
                    <div className="main-content">
                    main container
                    </div>
                </div>
            
        )
    }
}

export default ClassExample