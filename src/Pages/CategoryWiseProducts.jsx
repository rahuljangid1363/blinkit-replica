import React from "react";
import { ApiOfProducts } from "../api/ApiOfProducts";
import { Card } from "../Components/Card";
import { CategaryNavbar } from "../Components/CategaryNavbar";
export const CategoryWiseProducts = () => {
  return (
    <div>
      <div className="container-fluid">
        <CategaryNavbar />
        <div className="row">
          {ApiOfProducts.map((item) => (
            <div className="col-lg-2 col-md-3 col-sm-4 text-center shadow my-3" key={item.id} >
              <Card product={item} key={item.id}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
