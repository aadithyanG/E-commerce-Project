import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

function Login() {
    const [error,setError]=useState({
        nameERR:'',    
        emailERR:'',
        ph_NumberErr:'',
        passwordErr:'',
        confirm_PasswordErr:''
    })
    const [login,setLogin]=useState({
        name:'',
        email:'',
        ph_Number:'',
        password:'',
        confirm_Password:''
    })

    function ValidationLogin(e){
        let obj={}
        obj[e.target.name]=e.target.value;
        setLogin({...login, ...obj})

        let obj1={}
        

        for(let key in login){
            if(login[key].trim().length===0){
                obj1[key+"ERR"]="*Required"
            }
            
            else if(key==="email"){
                let Email =/^([A-Za-z0-9_\.\-]+)@([A-Za-z]+).([a-zA-Z]{3})$/
                if (Email.test(login[key])){
                    obj1[key+"ERR"]=""
                }
                else{
                    obj1[key+"ERR"]="*Required"
                }
            }

            else if(key==="password"){
                let Pw=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
                if(Pw.test(login[key])){
                    obj[key+"ERR"]=""
                }
                else{
                    obj1[key +"ERR"]="*Required"
                }
            }


            else{
              obj1[key +"ERR"]=""
            }
  
        }
        setError(obj1)
        console.log(error)
        console.log(obj1)
    }

    return(
        <div className="SignupBox">
        <h2>Sign-Up</h2>
        <h2>jagan</h2>
        <div className=" newColor">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name"></Form.Control>
        <Form.Text className="text-muted">Eg:John Doe</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={ValidationLogin}/>
        <small>{error.emailERR}</small><br></br>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={ValidationLogin} />
        <small>{error.passwordErr}</small><br></br>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password"  name="confirm_password"placeholder=" Confirm your Password" onChange={ValidationLogin} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button  variant="primary" type="submit">
        <Link to='/carouselLogin'>Submit</Link>
      </Button>
    </Form>
    </div>
    </div>
        
    )
    
}
export default Login
