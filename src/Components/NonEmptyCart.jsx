import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
export const NonEmptyCart = () => {
    const users=useSelector((state)=>state.users)
const dispatch=useDispatch();
const nevigate=useNavigate();
  return (
    <div>
  
{
  users.map((item)=>{
  return(<>
  <div className='col-12 border border-3 d-flex justify-content-around mt-3 rounded'>
    <img src={item.image} alt="apiData" /> 
    <p className='align-self-center fs-5 fw-semibold'>₹{item.price}</p>
    <p className='align-self-center fs-5 fw-semibold'>{item.quantity}</p>
    <p className='align-self-center fs-5 fw-semibold'>{item.about}</p>
    <div className='align-self-center'><button onClick={() => dispatch(remove(item))} className='btn btn-primary mb-2 '>Remove</button></div>
  </div>
  </>)
  })
} 
</div>
  )
}


