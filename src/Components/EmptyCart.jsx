import React from "react";
import { Card } from "../Components/Card";
import { ApiOfProducts } from "../api/ApiOfProducts";
import { Button } from "react-bootstrap";
export const EmptyCart = ({CloseCartData}) => {
  return (<>
      <div className="col-12 text-center">
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/24885/cart-clipart-xl.png"
          alt="sd"
          width={200}
        />
      </div>
      <h3 className="text-center mt-4 text-secondary">
        You don't have any items in your cart
      </h3>
      <p className="text-center ">Your favourite items are just a click away</p>
      <div className="text-center">
        <Button variant="success" onClick={CloseCartData} > Start Shoping </Button>
      </div>

      <div className="d-flex flex-wrap justify-content-around">
        {ApiOfProducts.map((item) => (
          <>
            <div className="col-5  shadow my-3" key={item.id}>
              <Card product={item} key={item.id} />
            </div>
          </>
        ))}
      </div>
      </>
  );
};
