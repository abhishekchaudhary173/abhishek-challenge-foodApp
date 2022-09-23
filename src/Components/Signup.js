import React from 'react'
import "./Signup.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

const Signup = () => {

  const [ {}, dispatch] = useStateValue();
  const addUser = (event) => {
    dispatch({
      type: "ADD_USER",
      user: event.target.value,
    });
    console.log(event.target.value);
  };
 

  const setFirstName = (event) => {
    addUser(event);
  };

  const setLastName = (event) => {
    event.preventDefault();
  };

  const setEmail = (event) => {
    event.preventDefault();
  };

  const setPassword = (event) => {
    event.preventDefault();
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
       
        <form>
          <div className='first'>
          <input  type="first_name" onChange={setFirstName} placeholder=" First Name*" />
          </div>
          <div className='last'>
          <input type="last_name" onChange={setLastName} placeholder=' Last Name*' />
          </div>
          <div className='email'>
          <input type="email" onChange={setEmail} placeholder=' Email ID*' />
          </div>
          <div className='password'>
          <input type="password" onChange={setPassword} placeholder=' Password*' />
          </div>
          <Link to="/main">
            <button className="login__signUpButton" type="submit" >
              Sign Up
            </button>
          </Link>
          <Link to="/">
        <button className="Cancel_btn">
          Cancel
        </button>
        </Link>
        </form>
      </div>
    </div>
  );
}


export default Signup