import React from 'react'
import { NonEmptyCart } from "../Components/NonEmptyCart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { EmptyCart } from "../Components/EmptyCart"
export const CartButton2 = () => {
    const users = useSelector((state) => state.users);
    console.log("Users---->>>>",users);
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
        class="offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabindex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="staticBackdropLabel">
            Cart
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
           <NonEmptyCart />
        </div>
      </div>
    </div>
  )
}


