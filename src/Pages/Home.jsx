import "../index.css";
import { ApiOfProducts, Catagary, OfferCardApi } from "../api/ApiOfProducts";
import { CategoryCard } from "../Components/CategoryCard";
import { Banner } from "../Components/Banner";
import { OfferCard } from "../Components/OfferCard";
import { Card } from "../Components/Card";

const Home = () => {
  return (
    <>
      <div className="container-fluid mt-2 w-100">
        <Banner />
{/* ----->>>>>>>>>>>>>>> OfferCard_Componet_----->>>>>>> */}
         <div className="row">
           {
            OfferCardApi.map((item)=>(
              <div className="col-md-3">
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
        <h3 className="mt-2">Book your order</h3>
{/* ----->>>>>>>>>>>>>>> Cart_Componet_----->>>>>>> */}
        <div className="row justify-content-around">
        {
          ApiOfProducts.map((item)=>(
            <>
            <div id="hovers" className="col-lg-2 col-md-3 col-sm-4 m-1 my-4">
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
