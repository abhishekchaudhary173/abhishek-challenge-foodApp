import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/products");
  }

  function handleClick1() {
    navigate("/login");
  }
  return (
    <div>
      <div className="header__align">
        <Link to="/login" >
        <div className="img_logo">
          <img src="/Images/logo1.png" alt="logo" className="logo" />{" "}
        </div>
        </Link>
        
        <div className="heading1" onClick={handleClick1}>
          <h1 className="heading">Food's Restaurant</h1>
        </div>
        
      </div>
     

      <div className="main_heading">
        <div className="heading_content">
          {" "}
          <p> Welcome to Food's </p>{" "}
        </div>
        <div className="heading_content1">
          {" "}
          <p>Kitchen</p>
        </div>
        <div className="btn">
          <button className="menu_btn" onClick={handleClick}>
            Go To Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
