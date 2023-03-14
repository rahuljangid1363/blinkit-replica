import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
export const CategaryNavbar = () => {
  const nevigate = useNavigate();
  return (
    <div>
      <row
        className="d-flex justify-content-between fw-semibold py-3 "
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <div onClick={() => nevigate("/veg")} style={{ color: "grey" }}>
          {" "}
          Vegetables & Fruits
        </div>
        <div onClick={() => nevigate("/veg")} style={{ color: "grey" }}>
          {" "}
          Dairy & Breakfast
        </div>
        <div onClick={() => nevigate("/veg")} style={{ color: "grey" }}>
          {" "}
          Munchies
        </div>
        <div onClick={() => nevigate("/veg")} style={{ color: "grey" }}>
          {" "}
          Cold Drinks & Juices
        </div>
        <div onClick={() => nevigate("/veg")} style={{ color: "grey" }}>
          {" "}
          Instant & Frozen Food
        </div>
        <div onClick={() => nevigate("/veg")} style={{ color: "grey" }}>
          {" "}
          Tea, Coffee & Health Drinks
        </div>
        <div onClick={() => nevigate("/veg")} style={{ color: "grey" }}>
          {" "}
          Bakery & Biscuits
        </div>

        <button
          class=" dropdown-toggle border-0 bg-light fw-semibold text-secondary "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ fontSize: "16px" }}
        >
          More
        </button>
        <ul class="dropdown-menu">
          <li>
            <a onClick={() => nevigate("/veg")} class="dropdown-item" href="#">
              Daily Uses Products
            </a>
          </li>
          <li>
            <a onClick={() => nevigate("/veg")} class="dropdown-item" href="#">
              Softdrink and Alcohol
            </a>
          </li>
          <li>
            <a onClick={() => nevigate("/veg")} class="dropdown-item" href="#">
              Vegitables and Fresh Fruits
            </a>
          </li>
          <li>
            <a onClick={() => nevigate("/veg")} class="dropdown-item" href="#">
              Breakfast,Launch and Dinner
            </a>
          </li>
          <li>
            <a onClick={() => nevigate("/veg")} class="dropdown-item" href="#">
              Daily Uses Products
            </a>
          </li>
          <li>
            <a onClick={() => nevigate("/veg")} class="dropdown-item" href="#">
              Softdrink and Alcohol
            </a>
          </li>
          <li>
            <a onClick={() => nevigate("/veg")} class="dropdown-item" href="#">
              Vegitables and Fresh Fruits
            </a>
          </li>
          <li>
            <a onClick={() => nevigate("/veg")} class="dropdown-item" href="#">
              Breakfast,Launch and Dinner
            </a>
          </li>
          <li>
            <a onClick={() => nevigate("/veg")} class="dropdown-item" href="#">
              Daily Uses Products
            </a>
          </li>
          <li>
            <a onClick={() => nevigate("/veg")} class="dropdown-item" href="#">
              Softdrink and Alcohol
            </a>
          </li>
          <li>
            <a onClick={() => nevigate("/veg")} class="dropdown-item" href="#">
              Vegitables and Fresh Fruits
            </a>
          </li>
          <li>
            <a onClick={() => nevigate("/veg")} class="dropdown-item" href="#">
              Breakfast,Launch and Dinner
            </a>
          </li>
        </ul>
      </row>
      <Outlet />
    </div>
  );
};
