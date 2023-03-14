import React from "react";
import { NonEmptyCart } from "../Components/NonEmptyCart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { EmptyCart } from "../Components/EmptyCart";
export const CartButton = () => {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <button
        className="btn btn-success fw-semibold"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        <AiOutlineShoppingCart className="fs-1" />
        <span className="px-1"> {users.length} </span>
        <span>items</span>
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
          {users.length == 0 ? <EmptyCart /> : <NonEmptyCart />}
        </div>
      </div>
    </div>
  );
};
