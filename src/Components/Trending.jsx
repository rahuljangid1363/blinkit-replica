import React from "react";
import { ApiOfProducts } from "../api/ApiOfProducts";
import { AiOutlineRise } from "react-icons/ai";
const Trending = () => {
  return (
    <div>
      <div className="container-fluid">
       <div className="container">
       <div className="row">
          <h5 className="py-2"><AiOutlineRise/> Trending </h5>
          {ApiOfProducts.map((item) => (
            <div className="col-1 rounded ">
              <img src={item.image} alt="dfdf" width={60} className='img-fluid img-thumbnail' />
              <p style={{ fontSize: "11px", textAlign: "center" }}>
                {item.about}
              </p>
            </div>
          ))}
        </div>
       </div>
      </div>
    </div>
  );
};

export default Trending;
