import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
function Login() {
  const [{}, dispatch] = useStateValue();
  const addUser = (event) => {
    dispatch({
      type: "ADD_USER",
      user: event.target.value,
    });
    console.log(event.target.value);
  };
  const login = (event) => {
    event.preventDefault();
  };

  const register = (event) => {
    event.preventDefault();
  };
  const setUserName = (event) => {
    addUser(event);
  };
  return (
    <div className="login">
      <Link to="/">
          <img src="/Images/logo.png" alt="logo" className="logo" />
          </Link>
          <div className="logo" >
          <h1 className="logo1">Food's Restaurant</h1>
        </div>
      
      <div className="login__container">
        <h1 className="sign_in">Sign In</h1>
        <form>
          <h5 className="sign_in1">Email</h5>
          <input type="email" onChange={setUserName} />
          <h5 className="sign_in1">Password</h5>
          <input type="password" />
          <Link to="/main">
            <button className="login__signInButton" type="submit">
              Sign in
            </button>
          </Link>
        </form>
        <p>
          By continuing, you agree to Food's restaurant Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;