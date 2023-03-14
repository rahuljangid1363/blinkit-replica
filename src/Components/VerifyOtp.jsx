import React from "react";
export const VerifyOtp = () => {
  return (
    <div>
      <div className=" d-flex justify-content-center">
        <div className="m-2">
          <input type="text" name="" id="" className="w" />
        </div>
        <div className="m-2">
          <input type="text" name="" id="" className="w" />
        </div>
        <div className="m-2">
          <input type="text" name="" id="" className="w" />
        </div>
        <div className="m-2">
          <input type="text" name="" id="" className="w" />
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-success">Submit</button>
        <br />
        <span className="text-danger fw-semibold">resend code</span>
      </div>{" "}
    </div>
  );
};
