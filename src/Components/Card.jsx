import React, { useState } from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { add, Remove } from "../Reducers/UserReducer";
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
      <div id="hovers" className=" mx-1 my-2 rounded ">
       <div className="discount mt-2">
       <span className=" w-lg-50 w-sm-25 my-2 rounded-end h-25 bg-primary text-light text-center">
          {product.discount}
        </span>
       </div>
       <div className="px-3">
       <div className=" text-center ">
          <img
            onClick={() => nevigate("/details-of-item")}
            src={product.image}
            alt="ra"
            width={100}
            className="img-fluid"
          />
        </div>
        <span className="mins8 rounded px-1 "><AiTwotoneThunderbolt/>8 mins</span> <br />
        <span className="">{product.about}</span><br />
        <span className="text-secondary">{product.quantity}</span>
        <div className="col-12 mt-3 d-flex justify-content-around">
          <p className="align-self-center fw-semibold">₹{product.price}</p>

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
                onClick={()=>{dispatch(Remove(product.id))}}
              >
                -
              </button>
              <button 
                type="button" className="lal btn text-light fw-semibold fs-6 "
              >
                {users.length}
              </button>
              <button key={product.id}
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
      </div>
    </>
  );
};
