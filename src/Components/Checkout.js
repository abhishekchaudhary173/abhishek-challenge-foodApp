import React from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/products");
  }
  return (
    <div>
      <div className="header__align">
        <div className="img_logo" onClick={handleClick}>
          <img src="/Images/logo1.png" alt="logo" className="logo" />{" "}
        </div>
        <div className="heading1">
          <h1 className="heading" onClick={handleClick}>
            Food's Restaurant
          </h1>
        </div>
      </div>
      <div className="checkout_overlay">
        <div className="checkout">
          <div className="checkout_content">
            <p>Thank you for your order.</p>{" "}
          </div>
          <div className="checkout1">
            <p>Chekout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
