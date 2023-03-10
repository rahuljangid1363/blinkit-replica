import React from "react";
import { DetailOfProduct } from "../Components/DetailOfProduct";
import { DetailProductPrice } from "../Components/DetailProductPrice";

const DetailsOfItem = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center mt-3">
            <DetailOfProduct />
          </div>
          <div className="col-md-6 ">
            <DetailProductPrice />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsOfItem;
