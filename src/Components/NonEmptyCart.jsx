import { useDispatch, useSelector } from "react-redux";
import { remove,increment,decrement,add } from "../Reducers/UserReducer";
import { AiFillCaretRight } from "react-icons/ai";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
export const NonEmptyCart = (props) => {
  const {price,totalDiscount,payablePrice,handleShow}=props;
const cart = useSelector((state) => state.cart);
const dispatch = useDispatch();
console.log('---0000----',price)
// const [Quantity,setQuantity]=useState()
// useEffect(()=>{
//   setQuantity(()=>cart.reduce((acc,cutacc)=>acc+Number(cutacc.price),0))
// },[cart])
  return (
    <>
        <b>Delivery in 14 Minutes</b>
        <p className="text-secondary">
          <span>Total : {cart.length}</span> items
        </p>

      <div className="">
        {cart.map((product,key) => {
            return (
            <div className="my-4" key={key}>
              <div className="row">
                <div className="col-3">
                  <img
                    src={product.image}
                    alt="apiData"
                    className="img-fluid img-thumbnail"
                  />
                   
                </div>
                <div className="col-5">
                  {product.about} + Roach with Crushing....
                  <br />
                  <span className="text-secondary">1 pack</span>
                </div>
                <div className="col-4 fw-semibold text-secondary">
                Quantity : {
                      cart.map((item)=>item.id===product.id ? (<span className="fs-5">{product.quantity}</span>):(<></>))
                    }
                </div>
              </div>
              <div className="row">
              <div className="col-3 text-center"><span className="bg-primary rounded text-light" style={{fontSize:'13px'}}>{product.offer}</span></div>
                <div className="col-5 fs-5 fw-bold">
                    <del className="text-secondary fs-6">₹{product.price}</del> ₹{product.price-product.discount}
                </div>
                <div className="col-4 text-center">




                {cart.some((item) => item.id === product.id && item.quantity!=0) ? (
              <ButtonGroup aria-label="Basic example" className="mb-2">
                <Button
                  variant="success"
                  onClick={() => dispatch(increment(product.id))}
                >
                  +
                </Button>
                
             { cart.map((item)=>item.id===product.id?(<Button variant="success">{item.quantity}</Button>):(<></>)) }
                  
                <Button
                  variant="success"
                  onClick={() =>  dispatch(decrement(product.id))}
                >
                  -
                </Button>
              </ButtonGroup>
            ) : (
              <Button variant="success"
                    onClick={() => {dispatch(remove(product.id))}}
                    className="p-1">Remove
                  </Button>
             
            )}

                </div>
              </div>
            </div>
            );
          
        })}
      </div>
      
     
      <p className="fw-semibold">Total MRP : ₹{price} </p>
      <p className="fw-semibold">Total Discount : ₹{totalDiscount}</p>
      <p className="fw-semibold">Payable Amount : ₹{payablePrice}</p>

      <div className="bg-success text-light justify-content-around d-flex fw-semibold py-2 rounded fs-5">
        <div>{cart.length} items</div><div>₹{payablePrice}</div> <div onClick={handleShow}>Proceed <AiFillCaretRight/></div>
      </div>
    </>
  );
};
