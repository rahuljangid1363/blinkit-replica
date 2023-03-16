import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import DeliveryLocation from "./DeliveryLocation";
import Swal from "sweetalert2";
import {
  AiFillAudio,
  AiOutlineSearch,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { CartButton } from "../Pages/CartButton";
import { VerifyOtp } from "./VerifyOtp";
import { VerifyNumber } from "./VerifyNumber";
import { useSelector } from "react-redux";
import { CartButton2 } from "./CartButton2";


const Navbar = () => {
  const users=useSelector((state)=>state.users)
  const nevigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data,setdata]=useState(true);
  const SendOtp=()=>{
      setdata(false);
  }
  const ReNumPage=()=>{
    setdata(true);
}

  const FinalState=()=>{
    setdata(true);
  }
  const SWAL=()=>{
    Swal.fire("Successful", "You are logged in!", "success");
  }
  return (
    <div>
      <div className="container-fluid pt-3">
        <div className="row d-flex ">
          <div className="col-lg-4  ">
            <div className="row">
              <div className="col-lg-6 d-flex  justify-content-between">
                <img
                  onClick={() => nevigate("/")}
                  src="https://d35fo82fjcw0y8.cloudfront.net/2022/01/25060423/Blinkit_Logo%402x.png"
                  height={55}
                  alt="Blinket"
                />
                <h1
                  onClick={() => nevigate("/cart")}
                  className="d-flex d-lg-none bg-dark text-light p-2 rounded align-self-center"
                >
                  <AiOutlineUnorderedList />
                </h1>
              </div>
              <div className="col-lg-6">
                <DeliveryLocation />
              </div>
            </div>
          </div>
          <div className="col-md-8 d-lg-flex d-none justify-content-around  align-self-center ">
            <div className="shadow w-75 d-flex rounded p-0 align-self-center">
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

{<button style={{ textDecoration: "none", color: "black" }}
  className="align-self-center fs-5 fw-semibold border-0 bg-light"
   onClick={handleShow}>Login
</button>
}

            
            {
              (users.length==0)?<CartButton/>:<CartButton2/>
            }
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
        {
          data?(<VerifyNumber SendOtp={SendOtp}/>):(<VerifyOtp handleClose={handleClose} FinalState={FinalState} SWAL={SWAL} ReNumPage={ReNumPage}/>)
        }
      </Modal>
    </div>
  );
};

export default Navbar;
