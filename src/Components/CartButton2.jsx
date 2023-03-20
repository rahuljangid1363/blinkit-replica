import React from 'react'
import { NonEmptyCart } from "../Components/NonEmptyCart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

export const CartButton2 = () => {
    const users = useSelector((state) => state.users);
  return (
    <div>
     <button className="btn btn-success fw-semibold" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
    <div className="row">
        <div className="col-3"> <AiOutlineShoppingCart className="fs-3" /></div>
        <div className="col-9">
            <div className="row"><span className="px-1"> {users.length} items</span> </div>
            <div className="row  text-start"><span>₹ {users.length*41}</span></div>
        </div>
    </div>
   
      </button>
      <div
        className="offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabIndex='-1'
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
           <NonEmptyCart />
        </div>
      </div>
    </div>
  )
}


