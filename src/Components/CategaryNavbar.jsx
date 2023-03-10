import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
// let Mystyle=({ isActive }) => ({
//   fontWeight:'bold',
//   color: isActive ? '#fff' : 'rgb(50, 75, 238)',
//   background: isActive ? 'rgb(6, 6, 199)' : '#f0f0f0',
//   padding:'5px', borderRadius:'5px'
// });
 
export const CategaryNavbar = () => {
    const nevigate=useNavigate();
  return (
    <div>
      <row className='d-flex justify-content-between fw-semibold py-3' style={{display:'flex',flexWrap:'wrap'}} >
            <div  onClick={()=>nevigate('/veg')} style={{textDecoration:"none",color:'grey'}}> Vegetables & Fruits</div>
            <div  onClick={()=>nevigate('/veg')} style={{textDecoration:"none",color:'grey'}}> Dairy & Breakfast</div>
            <div  onClick={()=>nevigate('/veg')} style={{textDecoration:"none",color:'grey'}}> Munchies</div>
            <div  onClick={()=>nevigate('/veg')} style={{textDecoration:"none",color:'grey'}}> Cold Drinks & Juices</div>
            <div  onClick={()=>nevigate('/veg')} style={{textDecoration:"none",color:'grey'}}> Instant & Frozen Food</div>
            <div  onClick={()=>nevigate('/veg')} style={{textDecoration:"none",color:'grey'}}> Tea, Coffee & Health Drinks</div>
            <div  onClick={()=>nevigate('/veg')} style={{textDecoration:"none",color:'grey'}}> Bakery & Biscuits</div>
            <div>
                <select className='selectpicker w-50 border-0'>
                    <option className='text-secondary fw-semibold'>More</option>
                    <option className='text-secondary fw-semibold'>Daily Uses Products</option>
                    <option className='text-secondary fw-semibold'>Softdrink and Alcohol</option>
                    <option className='text-secondary fw-semibold'>Vegitables and Fresh Fruits</option>
                    <option className='text-secondary fw-semibold'>Breakfast,Launch and Dinner</option>
                    <option className='text-secondary fw-semibold'>Daily Uses Products</option>
                    <option className='text-secondary fw-semibold'>Softdrink and Alcohol</option>
                    <option className='text-secondary fw-semibold'>Vegitables and Fresh Fruits</option>
                    <option className='text-secondary fw-semibold'>Breakfast,Launch and Dinner</option>
                    <option className='text-secondary fw-semibold'>Daily Uses Products</option>
                    <option className='text-secondary fw-semibold'>Softdrink and Alcohol</option>
                    <option className='text-secondary fw-semibold'>Vegitables and Fresh Fruits</option>
                    <option className='text-secondary fw-semibold'>Breakfast,Launch and Dinner</option>
                    <option className='text-secondary fw-semibold'>Other</option>
                </select>
            </div>
        </row>
        <Outlet/>
    </div>
  )
}


