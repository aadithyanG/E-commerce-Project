import React from "react"

class Form1 extends React.Component {
    constructor() {
        super()
        this.state = (
            {
                userName: '',
                passWord: '',
                userNameERR: false,
                passWordERR: false,
            }
        )
    }
    handleinput = (e) => {
        if(  e.target.value=== ''){
            
          
        }

    }

    // write a function for submit click
    // inside that check if condition on whther username is '', undefined or null   --- ||
    // if it satisfies, add class name to that tag or else remove

    // submitfunction = (e) => {
    //     // debugger
    //     // e.preventDefault()
    //     // alert(e.target.nodeName)
    //     if ((this.state.userName === '' || this.state.userName === undefined || this.state.userName === null)&&(this.state.passWord==="")) {
    //         this.setState({ 
    //             userNameERR: true
    //          })
    //     }
    //     else {
    //         this.setState({ userNameERR: false })
    //     }

    // }

    passwordfunction = (e) => {
        // return /^A/.test(p) && /^0-9/.test(p)  && /^@#$/.test(p);
        // (?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
        // const { value } = this.state;
        const re = new RegExp("^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");

        if (re.test(e.target.value)) {
          this.setState({passWordERR:true})
        }
        else{
            this.setState({passWordERR:false})
        }
        // const isOk = re.test(v);
        // isOk.match(/^abc[]/);
        // console.log(isOk);

    }


    render() {
        return (
            <>
                <form className="formbox">
                    <div className="userinputbox">
                        <label id="userinput">
                            UserName:
                        </label>
                        <input className={this.state.userNameERR ? 'invalid' : ''} onChange={this.handleinput} defaultValue={this.state.userName} type="text" name="userName" placeholder="Enter your UserName" size="48" ></input>
                    </div>
                    <div className="userpass-mailbox">
                        <label id="userpass">
                            PassWord:
                        </label>
                        <input type="password" onChange={this.passwordfunction} name="txtpassword" placeholder="Enter the PW" ></input>
                        <label id="useremail">
                            email:
                        </label>
                        <input id="useremail1" type="email" name="txtemail" placeholder="Enter email id" ></input>
                    </div>
                    <div className="useraddressbox">
                        <label id="useraddress">
                            Address:
                        </label>
                        <input id="useraddress1" type="text" name="txtaddress" placeholder="Enter your Address" size="48" ></input>
                    </div>
                    <div className="usersubmitbox">
                        <input type="submit" onClick={this.submitfunction} ></input>
                    </div>


                </form>

            </>
        )
    }
}
export default Form1;



