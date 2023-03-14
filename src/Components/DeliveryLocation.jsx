import React from "react";
import { BsCaretDownFill } from "react-icons/bs";

const DeliveryLocation = () => {
  return (
    <div class="dropdown justify-content-between">
      <h5>Delivery in 14 Minutes</h5>

      <p data-bs-toggle="modal" data-bs-target="#exampleModal">
        Jaipur, Rajasthan, India <BsCaretDownFill />
      </p>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-6" id="exampleModalLabel">
                Change Location
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex justify-content-around">
              <div>
                {" "}
                <button className="btn btn-success">Detect my location </button>
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
