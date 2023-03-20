import React from "react";
import { BsCaretDownFill } from "react-icons/bs";
const DeliveryLocation = () => {
  return (
    <div className="dropdown justify-content-between text-lg-start text-center">
      <h5>Delivery in 14 Minutes</h5>

      <p data-bs-toggle="modal" data-bs-target="#exampleModal">
        Jaipur, Rajasthan, India <BsCaretDownFill />
      </p>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-6" id="exampleModalLabel">
                Change Location
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-around">
              <div>
                {" "}
                <a href="https://www.google.com/maps/@26.9024647,75.7484713,13z" type="button" className="btn btn-success">Detect my location </a>
              </div>
              <div className="text-secondary">
                --
                <span className="border border-1 p-2 rounded-pill align-self-center">
                  Or
                </span>
                --
              </div>
              <div>
                <input
                  className="p-1 border border-secondary rounded"
                  type="text"
                  name=""
                  id=""
                  placeholder="Type your City/Colony/Society/Apartment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryLocation;
