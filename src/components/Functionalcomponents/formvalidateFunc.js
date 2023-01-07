import React,{useState}from "react"

function Formval(){
    
    const [Form,setForm]=useState({
        username:'',
        password:''
    })

    const [Error,setError]=useState({
        usernameERR:'',
        passwordERR:'',
    })

     let ChangeHandler=(e)=>{
        let obj={...Form}
        obj[e.target.name]=e.target.value;
        setForm(obj)
        // let errobj={}
        // for(let props in Form){
        //     if(Form[props].trim().length===0){
        //        errobj[props+"ERR"]="Required Field" 
        //     }
        //     else{
        //         errobj[props+"ERR"]=''
        //     }
        // }
        // setError(errobj)
    }

    const submitfn=()=>{
        let errobj={}
        for(let props in Form){
            if(Form[props].trim().length===0){
               errobj[props+"ERR"]="Required Field" 
            }
            else{
                errobj[props+"ERR"]=''
            }
        }
        setError(errobj)
    }

    return(
        <>
        <h2>hello</h2>
        <span>username</span>
        <input type="text" name="username" onChange={ChangeHandler}></input>
        <small>{Error.usernameERR}</small>
        <br></br>
        <span>password</span>
        <input type="password" name="password" onChange={ChangeHandler}></input>
        <small>{Error.passwordERR}</small>
        <br></br>
        <button onClick={submitfn}>Submit</button>
        </>
    )

}

export default Formval