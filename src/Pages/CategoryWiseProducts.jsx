import React from 'react'
import { ApiOfProducts } from '../api/ApiOfProducts'
import { Card } from '../Components/Card'
import { CategaryNavbar } from '../Components/CategaryNavbar'
export const CategoryWiseProducts = () => {
  return (
    <div>
      <CategaryNavbar/>
   <div className=''>
   {
        ApiOfProducts.map((item)=>(
          <div className="col-lg-3 col-md-3 col-sm-4 text-center shadow my-3">
        <Card product={item}/>
        </div>
        ))
      }
   </div>
    </div>
  )
}


