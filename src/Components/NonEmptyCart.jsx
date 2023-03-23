import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Reducers/UserReducer";
import { AiFillCaretRight } from "react-icons/ai";
import { Button } from "react-bootstrap";
export const NonEmptyCart = (props) => {
  const {price,totalDiscount,payablePrice,handleShow}=props;
const cart = useSelector((state) => state.cart);
const dispatch = useDispatch();

  return (
    <>
        <b>Delivery in 14 Minutes</b>
        <p className="text-secondary">
          <span>Total : {cart.length}</span> items
        </p>

      <div className="">
        {cart.map((product) => {
            return (
            <div className="my-4" key={product.id}>
              <div className="row">
                <div className="col-3">
                  <img
                    src={product.image}
                    alt="apiData"
                    className="img-fluid img-thumbnail"
                  />
                   
                </div>
                <div className="col-9 w-50">
                  {product.about} + Roach with Crushing....
                  <br />
                  <span className="text-secondary">1 pack</span>
                </div>
              </div>
              <div className="row">
              <div className="col-3 text-center"><span className="bg-primary rounded text-light" style={{fontSize:'13px'}}>{product.offer}</span></div>
                <div className="col-5 text-center fw-bold ">₹{product.price}</div>
                <div className="col-4 text-center">
                  <Button variant="success"
                    onClick={() => dispatch(remove(product.id))}
                    className="p-1"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
            );
          
        })}
      </div>
      <p className="fw-semibold">weight of Products : {cart.length}</p>
      <p className="fw-semibold">Total MRP : ₹{price} </p>
      <p className="fw-semibold">Total Discount : ₹{totalDiscount}</p>
      <p className="fw-semibold">Payable Amount : ₹{payablePrice}</p>

      <div className="bg-success text-light justify-content-around d-flex fw-semibold py-2 rounded fs-5">
        <div>{cart.length} items</div><div>₹{payablePrice}</div> <div onClick={handleShow}>Proceed <AiFillCaretRight/></div>
      </div>
    </>
  );
};
