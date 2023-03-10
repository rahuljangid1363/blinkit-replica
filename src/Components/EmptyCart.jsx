import React from 'react'
import { useNavigate } from 'react-router-dom'

export const EmptyCart = () => {
  const nevigate=useNavigate()
  return (
    <div>
      <div className="col-12 text-center">
        <h1 className='my-2'>My Cart</h1>
        <img  src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/24885/cart-clipart-xl.png" alt="sd" width={250} /></div>
        <h2 className='text-center mt-2'>You don't have any items in your cart</h2>
        <p className='text-center'>Your favourite items are just a click away</p>
       <div className='text-center'>
       <button onClick={()=>nevigate('/')} className='btn btn-success w-25 fw-semibold'>Start Shoping</button>
       </div>
    </div>
  )
}


