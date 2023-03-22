import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const design = {
  backgroundImage:
    'url("https://live.staticflickr.com/4125/5063188246_4ccaca3918_b.jpg")',
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "25px",
};
export const OfferCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className="p-3 border text-light"
      style={{
        backgroundImage: `url(${product.image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "25px",
      }}
    >
      <div
        onClick={() => navigate("/offer-page")}
        id="FontFamily"
        className="offer_card_section"
      >
        <h3 className="fw-bold w-75">Get up to {product.discount} <br /> OFF!</h3>
        <p className="fw-bold  w-50">Say Goodbye to bug bites</p>
      </div>
      <Button variant="light"
        onClick={() => navigate("/order-now")}
        className="fw-semibold rounded-pill"
      >
        Order Now
      </Button>
    </div>
  );
};

//
