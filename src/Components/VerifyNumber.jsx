import React from 'react'
import { useState } from 'react';
import { VerifyOtp } from './VerifyOtp';
export const VerifyNumber = ({SendOtp}) => {
  const [data, setData] = useState(false);
const Success=(e)=>{
  let o=e.target.value;
  if(o.length==10){
    setData(true)
  }
  else{
    setData(false)
  }
}

  return (
    <div>
      <div className="text-center pb-5">
          <h4>Phone Number Verification </h4> 
          <p className="fs-5  text-center ">
            Enter your phone number to <br /> Login/Sign up
          </p>



<div className='d-flex justify-content-center'>
  <div className='border rounded-start p-1 align-self-center fw-semibold '>📱 + 91</div>
  <div>
    <input className="border fw-bold fs-5 text-success rounded-end " placeholder="" type="tel" maxLength={10} onChange={Success}/>
  </div>
</div>
          <br />
          {data ? (
            <button
              className="btn btn-success w-25 mb-2"
              variant="primary"
              onClick={SendOtp}
            >
              Send OTP
            </button>
          ) : (
            <button className="btn btn-secondary w-25 mb-2">Send OTP</button>
          )}
          <p>By continuing, you agree to our</p>
          <a className="text-success px-1" href="#">
            Terms of service
          </a>
          <a className="text-success px-1" href="#">
            Privacy policy
          </a>
        </div>
    </div>
  )
}


