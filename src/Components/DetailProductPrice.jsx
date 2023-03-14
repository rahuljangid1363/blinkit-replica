import React from "react";

export const DetailProductPrice = () => {
  return (
    <div>
      <p className="mt-3 text-secondary">
        Home / Chips & Crisps / Kurkure Masala Munch Crisps
      </p>
      <h3 className="pb-3">Nested Milkmaid</h3>
      <div className="row justify-content-around mt-2">
        <div className="col-3 border border-2 text-center pt-3 ">
          {" "}
          <input type="radio" name="r" id="r" /> <b>2 x (82 g)</b>
          <p className="text-danger fs-6">out of stock</p>
        </div>
        <div className="col-3 border border-2 text-center pt-3">
          <input type="radio" name="r" id="r" /> <b>3 x 82 g</b>
          <p>
            ₹54{" "}
            <s
              style={{
                textDecoration: "lineThrough",
              }}
            >
              68
            </s>{" "}
          </p>
        </div>
        <div className="col-3 border border-2 text-center pt-3">
          <input type="radio" name="r" id="r" /> <b>82 g</b>
          <p>₹20</p>
        </div>
      </div>
      <button
        onClick={() => dispatch(add(item))}
        className="btn btn-outline-success px-5 py-2 mt-5 fw-semibold fs-5"
      >
        ADD
      </button>
      <h4 className="mt-5">Why shop from blinkit?</h4>
      <div className="row mt-5">
        <div className="col-2">
          <img
            src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX32430946.jpg"
            alt="df"
            height={90}
            width={-15}
          />
        </div>
        <div className="col-10">
          <p>
            <b>Superfast Delivery</b> <br />
            Get your order delivered to your doorstep at the earliest from dark
            stores near you.
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkCIkGeta03RPYAbs5kL7Ubwo0zkRROT6DtVM6JRBIoNfzYIWxu1vFC-QcUi_SYvuvDk&usqp=CAU"
            alt="df"
            height={90}
            width={-15}
          />
        </div>
        <div className="col-10">
          <p>
            <b>Best Prices & Offers</b> <br />
            Get your order delivered to your doorstep at the earliest from dark
            stores near you.
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png"
            alt="df"
            height={80}
            width={-15}
          />
        </div>
        <div className="col-10">
          <p>
            <b>Wide Assortment</b> <br />
            Get your order delivered to your doorstep at the earliest from dark
            stores near you.
          </p>
        </div>
      </div>
    </div>
  );
};
