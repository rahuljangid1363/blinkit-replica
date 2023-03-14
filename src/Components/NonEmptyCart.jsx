import React from "react";
import { useDispatch, useSelector } from "react-redux";
export const NonEmptyCart = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div>
      <b>Delivery in 14 Minutes</b>
      <p className="text-secondary">
        {" "}
        <span>{users.length}</span> items
      </p>
      {users.map((item) => {
        return (
          <>
            <div className="col border  mt-3 ">
              <div className="row">
                <div className="col-3">
                  {" "}
                  <img src={item.image} alt="apiData" width={100} />
                </div>
                <div className="col-9 align-self-center">
                  <div className="row d-flex">
                    <div className="col-7"> {item.about}</div>
                    <div className="col-5">{item.quantity}</div>
                  </div>
                  <div className="row">
                    <div className="col-7">₹{item.price}</div>
                    <div className="col-5">
                      <button
                        onClick={() => dispatch(remove(item))}
                        className="btn btn-primary p-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
