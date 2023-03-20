import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
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
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiFillAndroid,
  AiFillApple,
} from "react-icons/ai";
import { CartButton } from "../Pages/CartButton";
import { VerifyOtp } from "./VerifyOtp";
import { VerifyNumber } from "./VerifyNumber";
import { useSelector } from "react-redux";
import { CartButton2 } from "./CartButton2";

const Navbar = () => {
  const users = useSelector((state) => state.users);
  const nevigate = useNavigate();
  const [offCanvas, setOffCanvas] = useState(false);
  const handleOff = () => setOffCanvas(false);
  const handleOn = () => setOffCanvas(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setdata] = useState(true);
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
        <div className="row d-flex ">
          <div className="col-lg-4 ">
            <div className="row ">
              <div className="col-lg-6 d-flex  justify-content-between">
              <span className="d-lg-none d-flex ">
                  {users.length == 0 ? <CartButton /> : <CartButton2 />}
                </span>
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
            {users.length == 0 ? <CartButton /> : <CartButton2 />}
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
              <button
                className="btn btn-dark fw-semibold rounded-pill px-4"
                onClick={handleShow}
              >
                Login
              </button>
            </div>

            <div>
              <button
                className="btn btn-primary fw-semibold rounded-pill px-4 "
                onClick={() => {
                  nevigate("/"), handleOff();
                }}
              >
                Home
              </button>
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
