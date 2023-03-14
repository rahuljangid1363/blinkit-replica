import { BrowserRouter, Route, Routes } from "react-router-dom";
import CatagaryOfItem from "./Pages/CatagaryOfItem";
import DetailsOfItem from "./Pages/DetailsOfItem";
import Navbar from "./Components/Navbar";
import Trending from "./Components/Trending";
import { Vegetables } from "./Components/Vegetables";
import Home from "./Pages/Home";
import { OfferPage } from "../src/Pages/OfferPage";
import { OrderNow } from "./Pages/OrderNow";
import { Assistant } from "./Components/Assistant";
import { CartButton } from "./Pages/CartButton";
import { CategoryWiseProducts } from "./Pages/CategoryWiseProducts";
import { VerifyOtp } from "./Components/VerifyOtp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/otp-varification" element={<VerifyOtp />} />
          <Route
            path="/category-wise-product"
            element={<CategoryWiseProducts />}
          />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/order-now" element={<OrderNow />} />
          <Route path="/offer-page" element={<OfferPage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/veg" element={<Vegetables />} />
          <Route path="details-of-item" element={<DetailsOfItem />} />
          <Route path="/cart" element={<CartButton />} />
          <Route path="catagary" element={<CatagaryOfItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
