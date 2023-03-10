import React from 'react'
import { useSelector } from 'react-redux'
import { EmptyCart } from '../Components/EmptyCart'
import { NonEmptyCart } from '../Components/NonEmptyCart'
const CartDetail = () => {
  const users=useSelector((state)=>state.users)
  return (<>  
 
<div className="container-fluid">
  <div className="container">
    <div className="row">
    { users.length <= 0  ? <EmptyCart/> : <NonEmptyCart/> }
    </div>
  </div>
</div>

 </>)
}

export default CartDetail
