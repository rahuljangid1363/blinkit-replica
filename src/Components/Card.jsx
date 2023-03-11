import React from "react";
import { useNavigate } from "react-router-dom";
import { add,remove } from "../Reducers/UserReducer";
import { useDispatch,useSelector } from "react-redux";
export const Card=({product})=>{
    const nevigate=useNavigate()
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    return(<>
    <div>
    <div className=" text-center">
    <img onClick={() => nevigate("/details-of-item")} src={product.image} alt="ra" width={100} />
    </div>
            <p className="bg-dark w-100 text-light rounded text-center ">💥 8 Minutes</p> 
            <p className="fw-semibold ">{product.about}</p>
            <p>{product.quantity}</p>
           
                <div className="col-12 d-flex justify-content-around"> 
                <p className="fw-bold fs-5 ">₹{product.price}</p>
                    <button className="btn btn-outline-success px-4 py-0 fw-semibold" onClick={() => dispatch(add(product))}> ADD </button>
                </div>
                <p className="text-center d-flex ">Items  : <span className="fs-5">{users.length}</span></p>
    </div>
    </>)
}