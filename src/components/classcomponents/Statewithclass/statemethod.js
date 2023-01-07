import React, { Component } from "react";
// class DemoState extends Component{
//     constructor(){
//         super()
//         this.state=(
//             {
//                 name:"hi",
//                 show:false
//             }
//         )
//     }

//     componentDidMount(){
//         setTimeout(() => {
//             this.setState(
//                 {
//                     // name:"Welcome"
//                     show:true

//             }
//             )
//         }, 1000);
//     }
//     render(){
//        return (
//             // <h1>{this.state.name}</h1>
//             this.state.show?<h1>Welcome</h1>:<p>loading</p>
            
//             )
//     }
// }






class DemoState extends Component{
    constructor(){
        super()
        this.state=(
            {
                name:"hi",
                show:false
            }
        )
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState(
                {
                    // name:"Welcome"
                    show:true

            }
            )
        }, 1000);
    }
    handler=()=>{
            this.setState({
                name:"Welcome"
            })
    }
    render(){
       return (
            // <h1>{this.state.name}</h1>
            // this.state.show?<h1>Welcome</h1>:<p>loading</p>
           <>
            <h1>{this.state.name}</h1>
            <button 
            onClick={this.handler} >
                change
            </button>
            </>
            
            )
    }
}

export default DemoState