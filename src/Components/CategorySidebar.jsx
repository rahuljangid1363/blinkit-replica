import React from "react";
import { useNavigate } from "react-router-dom";

export const CategorySidebar = () => {
  const nevigate = useNavigate();
  return (
    <div className="col-md-3" style={{ overflowY: "scroll", height: "500px" }}>
      <div onClick={() => nevigate("/veg")} className=" border p-2 d-flex   ">
        <img
          src="https://m.media-amazon.com/images/I/71P46K9QwqL._SX679_.jpg"
          width={50}
          alt="er"
        />
        <p className=" text-center w-100 fw-semibold align-self-center ">
          Fresh Potato
        </p>
      </div>
      <div onClick={() => nevigate("/veg")} className="p-2  border d-flex">
        <img
          src="https://frugivore-storage.s3.amazonaws.com/media/package/img_one/2020-08-02/Green__Kraked_OLERQol.jpg"
          width={50}
          alt="er"
        />
        <p className=" text-center w-100 fw-semibold align-self-center">
          Fresh Chilli
        </p>
      </div>
      <div onClick={() => nevigate("/veg")} className="p-2  border d-flex">
        <img
          src="https://www.herbazest.com/imgs/3/f/2/9710/lemon.jpg"
          width={50}
          alt="er"
        />
        <p className=" text-center w-100 fw-semibold align-self-center">
          Fresh Lemon
        </p>
      </div>
      <div onClick={() => nevigate("/veg")} className="p-2  border d-flex">
        <img
          src="https://m.media-amazon.com/images/I/61x9Zv3gI7L._SL1500_.jpg"
          width={50}
          alt="er"
        />
        <p className=" text-center w-100 fw-semibold align-self-center">
          Fresh Dhaniya
        </p>
      </div>
      <div onClick={() => nevigate("/veg")} className="p-2  border d-flex">
        <img
          src="https://m.media-amazon.com/images/I/81gv--xMImL._SL1500_.jpg"
          width={50}
          alt="er"
        />
        <p className=" text-center w-100 fw-semibold align-self-center">
          Fresh Onion
        </p>
      </div>
      <div onClick={() => nevigate("/veg")} className="p-2  border d-flex">
        <img
          src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg"
          width={50}
          alt="er"
          className=" img-thumbnail"
        />
        <p className=" text-center w-100 fw-semibold align-self-center">
          Fresh Ladyfinger
        </p>
      </div>
      <div onClick={() => nevigate("/veg")} className="p-2  border d-flex">
        <img
          src="https://www.bigbasket.com/media/uploads/p/l/10000665-2_1-fresho-tinda.jpg"
          width={50}
          alt="er"
        />
        <p className=" text-center w-100 fw-semibold align-self-center">
          Fresh Tinda
        </p>
      </div>
      <div onClick={() => nevigate("/veg")} className="p-2  border d-flex">
        <img
          src="https://m.media-amazon.com/images/I/71P46K9QwqL._SX679_.jpg"
          width={50}
          alt="er"
        />
        <p className=" text-center w-100 fw-semibold align-self-center">
          Fresh Potato
        </p>
      </div>
      <div onClick={() => nevigate("/veg")} className="p-2  border d-flex">
        <img
          src="https://frugivore-storage.s3.amazonaws.com/media/package/img_one/2020-08-02/Green__Kraked_OLERQol.jpg"
          width={50}
          alt="er"
        />
        <p className=" text-center w-100 fw-semibold align-self-center">
          Fresh Chilli
        </p>
      </div>
      <div onClick={() => nevigate("/veg")} className="p-2  border d-flex">
        <img
          src="https://www.herbazest.com/imgs/3/f/2/9710/lemon.jpg"
          width={50}
          alt="er"
        />
        <p className=" text-center w-100 fw-semibold align-self-center">
          Fresh Lemon
        </p>
      </div>
      <div onClick={() => nevigate("/veg")} className="p-2  border d-flex">
        <img
          src="https://m.media-amazon.com/images/I/61x9Zv3gI7L._SL1500_.jpg"
          width={50}
          alt="er"
        />
        <p className=" text-center w-100 fw-semibold align-self-center">
          Fresh Dhaniya
        </p>
      </div>
      <div onClick={() => nevigate("/veg")} className="p-2  border d-flex">
        <img
          src="https://m.media-amazon.com/images/I/81gv--xMImL._SL1500_.jpg"
          width={50}
          alt="er"
        />
        <p className=" text-center w-100 fw-semibold align-self-center">
          Fresh Onion
        </p>
      </div>
      <div onClick={() => nevigate("/veg")} className="p-2  border d-flex">
        <img
          src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg"
          width={50}
          alt="er"
        />
        <p className=" text-center w-100 fw-semibold align-self-center">
          Fresh Ladyfinger
        </p>
      </div>
      <div onClick={() => nevigate("/veg")} className="p-2  border d-flex">
        <img
          src="https://www.bigbasket.com/media/uploads/p/l/10000665-2_1-fresho-tinda.jpg"
          width={50}
          alt="er"
        />
        <p className=" text-center w-100 fw-semibold align-self-center">
          Fresh Tinda
        </p>
      </div>
    </div>
  );
};
