import "../index.css";
import { ApiOfProducts, Catagary, OfferCardApi } from "../api/ApiOfProducts";
import { CategoryCard } from "../Components/CategoryCard";
import { Banner } from "../Components/Banner";
import { OfferCard } from "../Components/OfferCard";
import { Card } from "../Components/Card";
import { useNavigate } from "react-router-dom";
import { VerifyOtp } from "../Components/VerifyOtp";

const Home = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="container-fluid mt-2 w-100">
      
        <Banner />
{/* ----->>>>>>>>>>>>>>> OfferCard_Componet_----->>>>>>> */}
         <div className="row">
           {
            OfferCardApi.map((item)=>(
              <div className="col-lg-3 col-md-4 col-sm-6">
              <OfferCard product={item} key={item.id}/>
            </div>
            ))
           }
          </div>     
{/* ----->>>>>>>>>>>>>>> Offer_Componet_----->>>>>>> */}

{/* ----->>>>>>>>>>>>>>> Category_Componet_----->>>>>>> */}
          <h3 className="my-2">Categories</h3>
        <div className="row">
          {Catagary.map((item) => (
            <>
              <CategoryCard product={item} key={item.id}/>
            </>
          ))}
        </div>
{/* ----->>>>>>>>>>>>>>> Category_Componet_----->>>>>>> */}
<div className="d-flex justify-content-between mt-2">
<h3>Book your order</h3>
<h4 onClick={()=>navigate('/category-wise-product')} className="seeAll text-success">see all</h4>
</div>
{/* ----->>>>>>>>>>>>>>> Cart_Componet_----->>>>>>> */}
        <div className="row justify-content-around">
        {
          ApiOfProducts.map((item)=>(
            <>
            <div id="hovers" className="col-lg-2 col-md-3 col-sm-4 mx-1 my-2 ">
                <Card product={item} key={item.id} />
            </div>
            </>
          ))
        }
        </div>
{/* ----->>>>>>>>>>>>>>> Cart_Componet_----->>>>>>> */}
      </div>
   
    </>
  );
};

export default Home;

