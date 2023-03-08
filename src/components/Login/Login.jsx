import react from "react";
import { useState, useContext } from "react";
import { useStateValue } from "../../context/CurrentUserContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [{currentUser}, dispatch] = useStateValue;
    const history = useNavigate;

    const handelLogin = async (loginData) => {
        loginData.email = loginData?.email?.toLowerCase()
        const userData = await loginUser(loginData)

        dispatch({
            type: "SET_USER",
            currentUser: userData,
        });

        history.push("/");
    }

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handelChange = () => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return(
        <div className="container">
        <h1>login</h1>
        <form >
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
                <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}
