import React, { useState } from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { add, remove, increment, decrement } from "../Reducers/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
export const Card = ({ product }) => {
  const nevigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [addButton,setAddButton]=useState(true)
  const ChangeAddButton=()=>{setAddButton(false)}
  return (
    <>
      <div id="hovers" className=" mx-1 my-2 rounded ">
        <div className="discount mt-2">
          <span className=" w-lg-50 w-sm-25 my-2 rounded-end h-25 bg-primary text-light text-center">
            {product.offer}
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
          <span className="mins8 rounded px-1 ">
            <AiTwotoneThunderbolt />8 mins
          </span>{" "}
          <br />
          <span className="">{product.about}</span>
          <br />
          <span className="text-secondary">{product.weight}</span>
          <div className="col-12 mt-3 d-flex justify-content-around">
            <p className="align-self-center fw-semibold">₹{product.price}</p>

            {cart.some((item) => item.id === product.id && item.quantity!=0) ? (
              <ButtonGroup aria-label="Basic example" className="mb-2">
                <Button
                  variant="success"
                  onClick={() => dispatch(increment(product.id))}
                >
                  +
                </Button>
                
    { cart.map((item)=>item.id===product.id?(<Button variant="success">{item.quantity}</Button>):(<></>)) }
                  
                <Button
                  variant="success"
                  onClick={() =>  dispatch(decrement(product.id))}
                >
                  -
                </Button>
              </ButtonGroup>
            ) : (
              <Button
                variant="outline-success"
                className=" mb-2 fw-semibold"
                onClick={() => {
                  dispatch(add(product));
                }}
              >
                ADD
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
