import react from "react";
import { useState, useContext } from "react";

export default function Register() {

    const [formState, setFormState] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handelClickPassword = () => {
        setShowPassword((prevState) => !prevState)
    };

    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handelSubmit = () => {

    };


    return(
        <div className="container">
        <h1>Register</h1>
        <form >
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input 
             type="email" 
             className="form-control" 
             id="exampleInputEmail1" 
             aria-describedby="emailHelp"
             
             />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input 
             type="password" 
             className="form-control" 
             id="exampleInputPassword1"
             
             />

            <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
            <input 
            
             type="confirmpassword" 
             className="form-control" 
             id="exampleInputPassword1"
             
            />

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}