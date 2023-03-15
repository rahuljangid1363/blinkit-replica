import React from "react";
export const VerifyOtp = ({handleClose,FinalState,SWAL,ReNumPage}) => {

  return (
    <div className="p-5 justify-content-center">
      <div className=" d-flex  text-center mb-4">
        <div className="">
          <input type="tel " name="" id="" maxLength={1} className="OTP w-75  rounded fs-4 text-center fw-semibold" />
        </div>
        <div className="">
          <input type="tel" name="" id="" maxLength={1} className="OTP w-75 rounded fs-4 text-center fw-semibold" />
        </div>
        <div className="">
          <input type="tel" name="" id="" maxLength={1} className="OTP w-75 rounded fs-4 text-center fw-semibold" />
        </div>
        <div className="">
          <input type="tel" name="" id="" maxLength={1} className="OTP w-75 rounded fs-4 text-center fw-semibold" />
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-secondary m-1 w-25 mb-3" onClick={()=>ReNumPage()}>Back</button>
        <button className="btn btn-success m-1 w-25 mb-3" onClick={()=>{FinalState(),handleClose(),SWAL()}}>Submit</button>
        <br />
        <a className="text-danger f ">resend code</a>
      </div>
    </div>
  );
};
