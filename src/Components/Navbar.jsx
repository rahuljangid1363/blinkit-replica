import React from "react";
import { useSelector } from "react-redux";
import {NavLink,  useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import DeliveryLocation from "./DeliveryLocation";
import { AiFillAudio ,AiOutlineSearch,AiOutlineUnorderedList} from "react-icons/ai";
import { CartButton } from "../Pages/CartButton";

const Navbar = () => {
  const nevigate=useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const users = useSelector((state) => state.users);
  return (
    <div>
     
      <div className="container-fluid pt-3">
        <div className="row d-flex ">
       <div className="col-lg-4  ">
        <div className="row">
          <div className="col-lg-6 d-flex  justify-content-between">
            <img onClick={()=>nevigate("/")} src="https://d35fo82fjcw0y8.cloudfront.net/2022/01/25060423/Blinkit_Logo%402x.png"  height={55}  alt="Blinket"/>
            <h1 onClick={()=>nevigate('/cart')} className="d-flex d-lg-none bg-dark text-light p-2 rounded align-self-center"><AiOutlineUnorderedList/></h1>
          </div>
          <div className="col-lg-6">
          <DeliveryLocation/>
          </div>
        </div>
       </div>
          <div className="col-md-8 d-lg-flex d-none justify-content-around  align-self-center ">
           <div className="shadow w-75 d-flex rounded p-0 align-self-center">
            <AiOutlineSearch className="align-self-center fs-3"/>
            <input onClick={()=>nevigate('/trending')} style={{height:'45px'}} className=" border-0 align-self-center w-100" type="text"  placeholder="Search Anything"/>
            <AiFillAudio onClick={()=>nevigate('assistant')} className="align-self-center fs-3"/></div>
            <NavLink style={{ textDecoration: "none", color: "black" }} className="align-self-center fs-5 fw-semibold" onClick={handleShow}>
              <span>Login</span>
            </NavLink>
            <CartButton/>
          </div>
        </div><hr className="mb-0" id="hr" />
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

