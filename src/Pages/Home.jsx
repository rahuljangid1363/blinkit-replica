import "../index.css";
import { ApiOfProducts, Catagary, OfferCardApi } from "../api/ApiOfProducts";
import { CategoryCard } from "../Components/CategoryCard";
import { Banner } from "../Components/Banner";
import { OfferCard } from "../Components/OfferCard";
import { Card } from "../Components/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid mt-2 w-100">
        <Banner />
        {/* ----->>>>>>>>>>>>>>> OfferCard_Componet_----->>>>>>> */}
        <div className="row">
          {OfferCardApi.map((item, key) => (
            <div key={key} className="col-lg-3 col-md-4 col-sm-6">
              <OfferCard product={item} />
            </div>
          ))}
        </div>
        {/* ----->>>>>>>>>>>>>>> OfferCard_Componet_----->>>>>>> */}

        {/* ----->>>>>>>>>>>>>>> Category_Componet_----->>>>>>> */}
        <h3 className="my-2">Categories</h3>
        <div className="row">
          {Catagary.map((item,key) => (
            <div key={key} className="col-lg-1 col-md-2 col-sm-6  text-center">
              <CategoryCard product={item} />
            </div>
          ))}
        </div>
        {/* ----->>>>>>>>>>>>>>> Category_Componet_----->>>>>>> */}
        <div className="d-flex justify-content-between mt-2">
          <h3>Book your order</h3>
          <h4
            onClick={() => navigate("/category-wise-product")}
            className="seeAll text-success"
          >
            see all
          </h4>
        </div>
        {/* ----->>>>>>>>>>>>>>> Cart_Componet_----->>>>>>> */}
        <div className="row justify-content-around">
          {ApiOfProducts.map((item, key) => (
            <div key={key} className="col-lg-2 col-md-3  col-sm-4">
              <Card product={item} />
            </div>
          ))}
        </div>
        {/* ----->>>>>>>>>>>>>>> Cart_Componet_----->>>>>>> */}
      </div>
    </>
  );
};

export default Home;
