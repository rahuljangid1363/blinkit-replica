import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Reducers/UserReducer";
export const NonEmptyCart = (props) => {
  const {price,totalDiscount}=props;
const cart = useSelector((state) => state.cart);
const dispatch = useDispatch();


  // const [discount,setDiscount]=useState(null)
  
  // useEffect(()=>{
  //   setprice(()=>cart.reduce((acc,cutacc)=>acc+Number(cutacc.price),0))
  //   // setDiscount(()=>cart.reduce((dacc,dcutacc)=>dacc+Number(dcutacc.discount),0))
  // },[cart])
  return (
    <>
      <div>
        <b>Delivery in 14 Minutes</b>
        <p className="text-secondary">
          <span>Total : {cart.length}</span> items
        </p>
        {cart.map((product) => {
            return (
            <div className="my-4" key={product.id}>
              <div className="row">
                <div className="col-3">
                  <img
                    src={product.image}
                    alt="apiData"
                    className="img-fluid img-thumbnail"
                  />
                </div>
                <div className="col-9 w-50">
                  {product.about} + Roach with Crushing....
                  <br />
                  <span className="text-secondary">1 pack</span>
                </div>
              </div>
              <div className="row mt-1 fw-bold">
                <div className="col-3 offset-3 ">₹{product.price}</div>
                <div className="col-6 text-end">
                  <button
                    onClick={() => dispatch(remove(product.id))}
                    className="btn btn-success p-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            );
          
        })}
      </div>
      <p className="fw-semibold">Quantity of Products : {cart.length}</p>
      <p className="fw-semibold">Total MRP : {price} </p>
      <p className="fw-semibold">Total Discount : {totalDiscount}</p>
      <p className="fw-semibold">Payable Amount : ****</p>

      <div className="bg-success text-light justify-content-around d-flex fw-bold py-2 rounded">
        <div>{cart.length} items</div><div>₹1363</div> <div>Proceed-</div>
      </div>
    </>
  );
};
