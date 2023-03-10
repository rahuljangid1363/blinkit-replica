import React from 'react'
import { useNavigate } from 'react-router-dom'
export const OfferCard = ({product}) => {
  const navigate=useNavigate()
  console.log("--------->>>>",product.image )
  return (
    <div  className='p-3 border text-primary' style={{}}>
     <div onClick={()=>navigate('/offer-page')}>
      <h2 className='fw-bold  '>Get up to 15% OFF!</h2>
      <p className='fw-bold  w-50'>Say Goodbye to bug bites</p>
     </div>
     <button onClick={()=>navigate('/order-now')} className='btn btn-primary fw-semibold '>Order Now</button>
    </div>
  )
}


// id='OfferCard'