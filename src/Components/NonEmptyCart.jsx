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
              <div className="my-4">
              <div className="row">
                <div className="col-3"> <img src={item.image} alt="apiData" className="img-fluid img-thumbnail" /></div>
            <div className="col-9 w-50">
            {item.about} + Roach with Crushing....
            <br />
            <span className="text-secondary">1 pack</span>
            </div>
            </div>
               <div className="row mt-1 fw-bold">
                    <div className="col-3 offset-3 ">₹{item.price}</div>
                    <div className="col-6 text-end">
                      <button
                        onClick={() => dispatch(remove(item))}
                        className="btn btn-success p-1"
                      >
                        Remove
                      </button>
                  </div>
                </div>          

              </div>          </>
        );
      })}
       
    </div>
  );
};
