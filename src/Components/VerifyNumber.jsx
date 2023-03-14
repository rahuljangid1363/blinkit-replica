import React from 'react'
export const VerifyNumber = () => {
  return (
    <div>
      <div className="text-center">
          <h4>Phone Number Verification </h4> <hr />
          <p className="fs-5  text-center ">
            Enter your phone number to <br /> Login/Sign up
          </p>
          <input
            className=" p-2 mb-3 rounded shadow border fw-bold text-primary"
            placeholder=" 📱 + 91-"
            type="tel"
            onChange={Success}
          />
          <br />
          {data ? (
            <button
              className="btn btn-success w-25 mb-2"
              variant="primary"
              onClick={Otpdata}
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


