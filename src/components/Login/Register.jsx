import { useStateValue } from "../../context/CurrentUserContext";
import { useState, useContext } from "react";
import { registerUser } from "../../services/auth";
import { useNavigate } from "react-router";
// import { useHistory } from "react-router-dom";
import { AllUsersDispatchContext, AllUsersStateContext } from "../../context/AllUsersContext";

export default function Register() {
    const[{ currentUser }, dispatch] = useStateValue();
    const [passwordConfirm, setpasswordConfirm] = useState();

    const dispatchAllUsers =  useContext(AllUsersDispatchContext);
    const { allUsers } = useContext(AllUsersStateContext);
    const history = useNavigate();

    const handelRegister = async (registerData) => {
        registerData.email = registerData?.email?.toLowerCase();
        const userData = await registerUser(registerData);
        dispatch({ type: "SET_USER", currentUser: userData })
        dispatchAllUsers({ type: "USER_CREATED", payload: userData })

        history("/dashboard")
    };

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // const handelClickPassword = () => {
    //     setShowPassword((prevState) => !prevState)
    // };

    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        handelRegister(formData);
    };


    return(
        <div className="container">
        <h1>Register</h1>
        <form onSubmit={handelSubmit}>
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input 
             type="text" 
             className="form-control" 
             id="email" 
             aria-describedby="emailHelp"
             name="email"
             onChange={handelChange}
             
             />

            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input 
             type="text" 
             className="form-control" 
             id="password"
             name="password"
            //  value="password"
             onChange={handelChange}
             
             />

            <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
            <input
             type="text" 
             className="form-control" 
             id="passwordConfirm"
             name="passwordConfirm"
            //  value="passwordConfirm"
             onChange={(e) => setpasswordConfirm(e.target.value)}
             
            />
<br></br>
            <button type="submit" className="btn btn-primary">Register Now</button>
        </form>
        </div>
    );
}