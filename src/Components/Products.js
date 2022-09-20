import React, { useContext, useEffect } from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../ContextProvider";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

const Products = () => {
  const { data, cart, isModal, setIsModal, setData, setCart } =
    useContext(StateContext);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  const navigate1 = useNavigate();

  function handleClick1() {
    navigate1("/checkout");
  }

  console.log("================= cart =================", cart);

  const handleClose = () => {
    setIsModal(false);
  };

  const handleTrue = () => {
    setIsModal(true);
  };
  const handleplus = (data) => {
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === data.name) {
          let temp = cart;
          temp[i] = { ...temp[i], value: temp[i].value + 1 };
          setCart(temp);
          return;
        }
      }
      let tempObj = { ...data, value: 1 };
      setCart([...cart, tempObj]);
    } else {
      let tempObj = { ...data, value: 1 };
      setCart([...cart, tempObj]);
    }
  };

  const handleminus = (data) => {
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === data.name) {
          let temp = cart;
          temp[i] = { ...temp[i], value: temp[i].value - 1 };
          setCart(temp);
          return;
        }
      }
      let tempObj = { ...data, value: 1 };
      setCart([...cart, tempObj]);
    } else {
      alert("Cart is empty");
    }
  };

  const getData = () => {
    fetch("data.json")
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  const totalCost = () => {
    let val = 0;
    for (let i = 0; i < cart.length; i++) {
      val += cart[i].value * cart[i].price;
    }
    return val;
  };
  const totalItems = () => {
    let val = 0;
    for (let i = 0; i < cart.length; i++) {
      val += cart[i].value;
    }
    return val;
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="header">
      <div className="header__main">
        <div className="header__left">
          <div className="img_logo">
            <img
              src="/Images/logo1.png"
              alt="logo"
              className="logo"
              onClick={handleClick}
            />
          </div>
          <div className="heading1">
            <h1 className="heading" onClick={handleClick}>
              Food's Restaurant
            </h1>
          </div>
        </div>
        <div onClick={handleTrue} className="basket">
          <img
            src="/Images/basket.png"
            alt="basket"
            style={{
              width: 40,
              height: 30,
            }}
          />
          {cart.length > 0 && (
            <Badge
              style={{ marginTop: -40 }}
              badgeContent={totalItems()}
              color="secondary"
            />
          )}
        </div>
      </div>

      <div className="productData__card">
        {data &&
          data.map((item, index) => {
            return (
              <div key={index + item.name} className="productData_content">
                <div className="productData__overlay">
                  <img
                    className="propertyData_overlayImg"
                    src={item.image}
                    alt="PropertyImage"
                    style={{
                      width: 300,
                      height: 250,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />

                  <div className="productData__overlayname ">
                    <div className="productData__name">
                      <p className="productData__name1">{`${item.name}`}</p>
                    </div>
                  </div>
                  <div className="productData__overlayText ">
                    <div className="productData__price">
                      <p className="productData__price1">
                        {`Price:${item.price}`}
                      </p>
                    </div>
                  </div>
                  <div className="productData__overlaybtn ">
                    <div className="productData__btn">
                      <div>
                        <button
                          className="add_btn"
                          onClick={() => {
                            handleplus(item);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          className="minus_btn"
                          onClick={() => {
                            handleminus(item);
                          }}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <Modal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={isModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            width: 600,
            backgroundColor: "white",
            outline: "none",
            borderRadius: 8,
            padding: 20,
          }}
        >
          <div style={{ color: "black", fontWeight: 800, marginBottom: 10 }}>
            Order Summary
          </div>

          {cart &&
            cart.map((item, index) => {
              return (
                <div
                  key={index + item.name}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    {item.name}: {item.value}
                  </div>
                  <div className="productData__overlaybtn ">
                    <div className="productData__btn">
                      <div>
                        <button
                          className="add_btn"
                          onClick={() => {
                            handleplus(item);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          className="minus_btn"
                          onClick={() => {
                            handleminus(item);
                          }}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          <div style={{ marginTop: 10 }}>Total INR: {totalCost()} </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              gap: 10,
            }}
          >
            <Button variant="contained" onClick={handleClick1}>
              SAVE AND CHECKOUT
            </Button>
            <Button onClick={handleClose} variant="text">
              CANCEL
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Products;