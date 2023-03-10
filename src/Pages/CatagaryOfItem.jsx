import React from 'react'
import  {Card}  from "../Components/Card";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { ApiOfProducts } from '../api/ApiOfProducts';
import { CategaryNavbar } from '../Components/CategaryNavbar';
import { CategorySidebar } from '../Components/CategorySidebar';


const CatagaryOfItem = () => {
const nevigate=useNavigate();
const users=useSelector((state)=>state.users);
const dispatch=useDispatch()
  return (
    <div className='container-fluid'>
      <CategaryNavbar/>
   <div className="row ">
      <CategorySidebar/>
     <div className="col-md-9 " style={{overflowY: "scroll",height: "500px" }}>
      <div className="row ">
        {
        ApiOfProducts.map((item)=>(<>
        <div className="col-lg-3 col-md-3 col-sm-4 text-center shadow my-3">
        <Card product={item}/>
        </div>
        </>))
      }
      </div>
     </div>
   </div>
    </div>
  )
}

export default CatagaryOfItem
