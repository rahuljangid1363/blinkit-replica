import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { add, remove } from "../Reducers/UserReducer";
import { useDispatch, useSelector } from "react-redux";
export const Card = ({ product }) => {
  const nevigate = useNavigate();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [CardButton, setCardButton] = useState(true);
  const ChangeCardButton = () => {
    setCardButton(false);
  };
  return (
    <>
      <div>
        <div className="discount fw-semibold w-50 my-2 rounded-end bg-primary text-light text-center">
          {product.discount}
        </div>
        <div className=" text-center ">
          <img
            onClick={() => nevigate("/details-of-item")}
            src={product.image}
            alt="ra"
            width={100}
            className="img-fluid "
          />
        </div>
        <p className="">{product.about}</p>
        <p className="text-secondary">{product.quantity}</p>

        <div className="col-12 d-flex justify-content-around">
          <p>₹{product.price}</p>

          {CardButton ? (
            <button
              className="btn btn-outline-success h-50 mb-3 fw-semibold"
              onClick={() => {
                dispatch(add(product)), ChangeCardButton();
              }}
            >
              ADD
            </button>
          ) : (
            <div
              className="CartButton  btn-group h-25 "
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className="lal btn text-light fw-semibold fs-5 "
              >
                -
              </button>
              <button
                type="button"
                className="lal btn text-light fw-semibold fs-6 "
              >
                {users.length}
              </button>
              <button
                type="button"
                onClick={() => dispatch(add(product))}
                className="lal btn text-light fw-semibold fs-5 "
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
