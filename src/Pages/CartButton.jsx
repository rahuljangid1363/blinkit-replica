import React from "react";
import { NonEmptyCart } from "../Components/NonEmptyCart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { EmptyCart } from "../Components/EmptyCart";
export const CartButton = () => {
  const users = useSelector((state) => state.users);
  return (
    <div>

      <button className="btn btn-success fw-semibold py-3" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
        <AiOutlineShoppingCart className="fs-3" />
        <span>My cart</span>
      </button>
      <div
        className="offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabIndex="-1"
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
          <EmptyCart />
        </div>
      </div>
    </div>
  );
};

 