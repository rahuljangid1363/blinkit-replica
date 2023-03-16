import React, { useState } from "react";
import OtpInput from "react18-input-otp";
export const VerifyOtp = ({ handleClose, FinalState, SWAL, ReNumPage }) => {
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  return (
    <div className="p-5 mx-5">
      <div className="row justify-content-center text-center mx-3 mb-3 fs-5">
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          inputStyle={{ padding: "5px", width: "50px" }}
          separator={<span className="mx-2"> </span>}
        />
      </div>
      <div className="text-center">
        <button
          className="btn btn-secondary m-1 w-25 mb-3"
          onClick={() => ReNumPage()}
        >
          Back
        </button>
        <button
          className="btn btn-success m-1 w-25 mb-3"
          onClick={() => {
            FinalState(), handleClose(), SWAL();
          }}
        >
          Submit
        </button>
        <br />
        <a className="text-danger  ">resend code</a>
      </div>
    </div>
  );
};
