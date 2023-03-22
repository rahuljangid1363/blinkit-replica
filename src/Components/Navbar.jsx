import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState,  useEffect } from "react";
import DeliveryLocation from "./DeliveryLocation";
import Swal from "sweetalert2";

import {
  AiFillAudio,
  AiOutlineSearch,
  AiOutlineUnorderedList,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiFillAndroid,
  AiFillApple,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { VerifyOtp } from "./VerifyOtp";
import { VerifyNumber } from "./VerifyNumber";
import { useSelector } from "react-redux";
import { EmptyCart } from "./EmptyCart";
import { NonEmptyCart } from "./NonEmptyCart";

const Navbar = () => {
const [cartOffCanvas,setCartOffCanvas]=useState(false)
const ShowCartData=()=>{setCartOffCanvas(true)}
const CloseCartData=()=>{setCartOffCanvas(false)}

  const cart = useSelector((state) => state.cart);
  const nevigate = useNavigate();
  const [offCanvas, setOffCanvas] = useState(false);
  const handleOff = () => setOffCanvas(false);
  const handleOn = () => setOffCanvas(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setdata] = useState(true);

  const [price,setprice]=useState(null);
  const [totalDiscount,setTotalDiscount]=useState(0)
  useEffect(()=>{
    setprice(()=>cart.reduce((acc,cutacc)=>acc+Number(cutacc.price),0))
    setTotalDiscount(()=>cart.reduce((acc,cutacc)=>acc+Number(cutacc.discount),0))
  },[cart])

  const SendOtp = () => {
    setdata(false);
  };
  const ReNumPage = () => {
    setdata(true);
  };

  const FinalState = () => {
    setdata(true);
  };
  const SWAL = () => {
    Swal.fire("Successful", "You are logged in!", "success", { timer: 1000 });
  };
  return (
    <div>
      <div className="container-fluid pt-3">
      <h1>Discount{totalDiscount}</h1>
        <div className="row d-flex ">
          <div className="col-lg-4 ">
            <div className="row ">
              <div className="col-lg-6 d-flex  justify-content-between">
                <img
                  onClick={() => nevigate("/")}
                  src="https://d35fo82fjcw0y8.cloudfront.net/2022/01/25060423/Blinkit_Logo%402x.png"
                  height={55}
                  alt="Blinket"
                />

                <Button
                  variant="primary"
                  onClick={handleOn}
                  className="btn d-flex d-lg-none bg-dark text-light align-items-center fs-1 "
                  type="button"
                >
                  <AiOutlineUnorderedList />
                </Button>
              </div>
              <div className="col-lg-6">
                <DeliveryLocation />
              </div>
            </div>
          </div>

          <div className="col-md-8 d-lg-flex d-none justify-content-around d-lg-flex  align-self-center ">
            <div className="shadow d-lg-flex w-75 rounded p-0 align-self-center">
              <AiOutlineSearch className="align-self-center fs-3" />
              <input
                onClick={() => nevigate("/trending")}
                style={{ height: "45px" }}
                className=" border-0 align-self-center w-100"
                type="text"
                placeholder="Search Anything"
              />
              <AiFillAudio
                onClick={() => nevigate("assistant")}
                className="align-self-center fs-3"
              />
            </div>

            {
              <button
                style={{ textDecoration: "none", color: "black" }}
                className="align-self-center fs-5 fw-semibold border-0 bg-light d-lg-flex d-none"
                onClick={handleShow}
              >
                Login
              </button>
            }

         
         <div onClick={ShowCartData}>
         {cart.length == 0 ? (
              <Button variant="success" className="fw-semibold">
             < AiOutlineShoppingCart  className="fs-4 my-2"/>  My Cart 
              </Button>
            ) : (
              <Button variant="success" className="fw-semibold">
              < AiOutlineShoppingCart  className="fs-4"/>  {cart.length} items
              <br /><span>₹ {price}</span>
              </Button>
            )}
         </div>

            <Offcanvas show={cartOffCanvas} onHide={CloseCartData} placement={'end'}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title><b>My Cart</b></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
               {
                cart.length==0?<EmptyCart CloseCartData={CloseCartData}/>: <NonEmptyCart price={price} totalDiscount={totalDiscount}/>
               }
              </Offcanvas.Body>
            </Offcanvas>

          </div>
        </div>

        <hr className="mb-0" id="hr" />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        {data ? (
          <VerifyNumber SendOtp={SendOtp} />
        ) : (
          <VerifyOtp
            handleClose={handleClose}
            FinalState={FinalState}
            SWAL={SWAL}
            ReNumPage={ReNumPage}
          />
        )}
      </Modal>

      {/* -------------->>>>>>>> OffCanvas For Mobile Size <<<<<<<--------------- V*/}

      <Offcanvas
        className="w-50 h-75"
        show={offCanvas}
        onHide={handleOff}
        placement="end"
        autoFocus="boolean"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex justify-content-between mb-3">
            <div>
              <Button variant="dark"
                className="fw-semibold rounded-pill px-4"
                onClick={handleShow}
              >
                Login
              </Button>
            </div>

            <div>
              <Button variant="primary"
                className="fw-semibold rounded-pill px-4 "
                onClick={() => {
                  nevigate("/"), handleOff();
                }}
              >
                Home
              </Button>
            </div>
          </div>
          <p className="border p-1 shadow fw-semibold rounded">Contact us</p>
          <p className="border p-1 shadow fw-semibold rounded">About us</p>
          <p className="border p-1 shadow fw-semibold rounded">Customer Care</p>
          <div className="fs-1  d-flex justify-content-around ">
            <div>
              <AiOutlineWhatsApp />
            </div>
            <div>
              <AiOutlineTwitter />
            </div>
            <div>
              <AiFillApple />
            </div>
            <div>
              <AiFillAndroid />
            </div>
          </div>
          <div className="text-center mt-5">
            <img
              src="https://thelogofinder.com/wp-content/uploads/2022/08/Blinkit.svg"
              alt="Blinkit"
              width={150}
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Navbar;
