import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Remove } from "../Reducers/UserReducer";
export const NonEmptyCart = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <b>Delivery in 14 Minutes</b>
        <p className="text-secondary">
          <span>Total : {users.length}</span> items
        </p>
        {users.map((product) => {
          return (
              <div className="my-4">
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
                      onClick={() => dispatch(Remove(product.id))}
                      className="btn btn-success p-1">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </>
  );
};
