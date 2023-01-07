import React, { useState } from "react";

function Formvalidate() {

    const [Form, setForm] = useState({
        UserName: '',
        age: '',
        gender: ''
    });

    const [Error, setError] = useState({
        UserNameERR: '',
        ageERR: '',
        genderERR: ''

    });

    let ChangeHandler = (e) => {
        let obj = { ...Form }
        obj[e.target.name] = e.target.value;
        setForm(obj);
        console.log(Form)
        
    }
    let submitfn=()=>{
        let errobj = {}
        for (let props in Form) {
            if (Form[props].trim().length <= 0) {
                errobj[props + "ERR"] = "Required Field"
            }
            else {
                errobj[props + "ERR"] = '';

            }
        }
        setError(errobj)
        console.log(Form);
    }
    return (
        <>
            <fieldset >
                <legend>
                    FORM Validation:
                </legend>
                <div className="formbox">
                    <div>
                        <label>
                            UserName:
                        </label>
                        <input className={Error.UserNameERR ? 'invalid' : ''} type="text" name="UserName" onChange={ChangeHandler}></input>
                    </div>
                    <br></br>
                    <small>{Error.UserNameERR}</small>
                    <div>
                        <label>
                            Age:
                        </label>
                        <input type="number" name="age" onChange={ChangeHandler} ></input>
                    </div>
                    <br></br>
                    <small>{Error.ageERR}</small>
                    <div>
                        <span>Gender:</span>
                        <input type="radio" name="gender" value="Male" onChange={ChangeHandler}></input>
                        <lable>Male</lable>
                        <br></br>
                        <input type="radio" name="gender" value="Female" onChange={ChangeHandler} ></input>
                        <lable>Female</lable>
                        <input type="radio" name="gender" value="others" onChange={ChangeHandler} ></input>
                        <lable>Others..</lable>
                    </div>
                    <small>{Error.genderERR}</small>
                    <div>
                        <label>
                            Choose your Country:
                        </label>
                        <input list="country" name="country" ></input>
                        <datalist id="country">
                            <option>India</option>
                            <option>NRI</option>
                            <option>Others..</option>
                        </datalist>
                    </div>
                    <div>
                        <button onClick={submitfn}>
                            Submit
                        </button>
                    </div>
                </div>
            </fieldset>
        </>
    )
}
export default Formvalidate;