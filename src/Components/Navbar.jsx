import React from "react";
import { useSelector } from "react-redux";
import {NavLink,  useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import DeliveryLocation from "./DeliveryLocation";


const Navbar = () => {
  const nevigate=useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const users = useSelector((state) => state.users);
  return (
    <div>
     
      <div className="container-fluid py-3 shadow">
        <div className="row d-flex">
       <div className="col-md-4 mb-3">
        <div className="row">
          <div className="col-6">
          <img onClick={()=>nevigate("/")} src="https://d35fo82fjcw0y8.cloudfront.net/2022/01/25060423/Blinkit_Logo%402x.png"
              height={55}
              alt="Blinket"
            />
          </div>
          <div className="col-6">
          <DeliveryLocation/>
          </div>
        </div>
       </div>
 
          <div className="col-md-8 d-flex justify-content-around ">
            <input onClick={()=>nevigate('/trending')} style={{height:'38px'}} className="w-75 rounded border-0 shadow align-self-center form-control" type="text" placeholder="Search Anything"/>
            <NavLink style={{ textDecoration: "none", color: "black" }} className="align-self-center fs-5 fw-semibold" onClick={handleShow}>
              <span>Login</span>
            </NavLink>
            <button onClick={()=>nevigate('/cart')} className="btn btn-success fw-semibold d-flex px-3 pb-0">
              {users.length}
             <img  className="align-self-center"
                src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-24.jpg" alt="cart" height={30} />
              CART
            </button>
           
          </div>
        </div><hr className="mb-0" />
      </div>


      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className="text-center">
        <h4>Phone Number Verification </h4> <hr />
          <p className="fs-5  text-center ">Enter your phone number to <br /> Login/Sign up</p>
          <input  className=" p-2 mb-3 rounded shadow border fw-bold text-primary" placeholder=" 📱 + 91-" type="tel" /> <br />
          <button className="btn btn-primary w-25 mb-2">Send OTP</button>
          <p>By continuing, you agree to our</p>
          <a className="text-success px-1" href="#">Terms of service</a>
          <a className="text-success px-1" href="#">Privacy policy</a>
    </div>
        </Modal.Body>
      </Modal>
       
    </div>
  );
};

export default Navbar;

