import React from "react";
import { ApiOfProducts } from "../api/ApiOfProducts";

const Trending = () => {
  return (
    <div>
      <div className="container-fluid">
       <div className="container">
       <div className="row">
          <h3>Trending items</h3>
          {ApiOfProducts.map((item) => (
            <div className="col border border-1 rounded ">
              <img src={item.image} alt="dfdf" width={60} />
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
