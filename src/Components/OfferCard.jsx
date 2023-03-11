import React from 'react'
import { useNavigate } from 'react-router-dom'
const design={
  backgroundImage: 'url("https://live.staticflickr.com/4125/5063188246_4ccaca3918_b.jpg")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: '25px'
}
export const OfferCard = ({product}) => {
  console.log("------->>>>>>>>>>",product.image);
  const navigate=useNavigate()
  return (
    <div className='p-3 border text-primary' style={design}>
     <div onClick={()=>navigate('/offer-page')}>
      <h2 className='fw-bold  '>Get up to 15% OFF!</h2>
      <p className='fw-bold  w-50'>Say Goodbye to bug bites</p>
     </div>
     <button onClick={()=>navigate('/order-now')} className='btn btn-primary fw-semibold rounded-pill'>Order Now</button>
    </div>
  )
}


// 