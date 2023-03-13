import React from 'react'
import { Card } from "../Components/Card"
import { useNavigate } from 'react-router-dom'
import { ApiOfProducts } from '../api/ApiOfProducts'
export const EmptyCart = () => {
  const nevigate=useNavigate()
  return (
    <div>
      <div className="col-12 text-center">
        <img  src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/24885/cart-clipart-xl.png" alt="sd" width={200} /></div>
        <h3 className='text-center mt-4 text-secondary'>You don't have any items in your cart</h3>
        <p className='text-center '>Your favourite items are just a click away</p>
       <div className='text-center'>
       <button onClick={()=>nevigate('/')} className='btn btn-success fw-semibold'>Start Shoping</button>
       </div>
       



  {/* <div id="carouselExample" className="carousel slide"> */}
   {
  ApiOfProducts.map((item)=>(<>
  {/* <div className="carousel-inner">
    <div className="carousel-item active"> */}
     <div className="col shadow my-3">
        <Card product={item}/>
     </div>
   {/* </div>
  </div> */}
  </>))}
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}



   

    </div>
  )
}


