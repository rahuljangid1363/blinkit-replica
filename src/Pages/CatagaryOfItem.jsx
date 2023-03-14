import React from "react";
import { Card } from "../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiOfProducts } from "../api/ApiOfProducts";
import { CategaryNavbar } from "../Components/CategaryNavbar";
import { CategorySidebar } from "../Components/CategorySidebar";

const CatagaryOfItem = () => {
  const nevigate = useNavigate();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div className="container-fluid">
      <CategaryNavbar />
      <div className="row ">
        <CategorySidebar />
        <div
          className="col-md-9 "
          style={{ overflowY: "scroll", height: "500px" }}
        >
          <div className="row ">
            <div className="d-flex justify-content-between">
              <h5>By Rolling Paper Online</h5>

              <div className=" w-25 d-flex fw-semibold align-self-center justify-content-between">
                Sort By
                <button
                  id="bttn"
                  class="w-75 fw-semibold dropdown-toggle rounded text-success bg-light"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Relivance
                </button>
                <ul class="dropdown-menu border-success text-success">
                  <li className="d-flex ">
                    <input type="radio" name="y" />
                    <a className="dropdown-item" href="#">
                      Price (Low to High)
                    </a>
                  </li>
                  <li className="d-flex">
                    <input type="radio" name="y" />
                    <a className="dropdown-item" href="#">
                      Price (High to Low)
                    </a>
                  </li>
                  <li className="d-flex">
                    <input type="radio" name="y" />
                    <a className="dropdown-item" href="#">
                      Discount (High to Low)
                    </a>
                  </li>
                  <li className="d-flex">
                    <input type="radio" name="y" />
                    <a className="dropdown-item" href="#">
                      Name (A to Z)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {ApiOfProducts.map((item) => (
              <>
                <div className="col-lg-3 col-md-3 col-sm-4 text-center shadow my-3">
                  <Card product={item} />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatagaryOfItem;
