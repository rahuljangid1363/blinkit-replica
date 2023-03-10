import { BrowserRouter, Route, Routes } from "react-router-dom"
import CartDetail from "./Pages/CartDetail"
import CatagaryOfItem from "./Pages/CatagaryOfItem"
import DetailsOfItem from "./Pages/DetailsOfItem"
import Navbar from "./Components/Navbar"
import Trending from "./Components/Trending"
import Try from "./Components/Try"
import {Vegetables} from "./Components/Vegetables"
import Home from "./Pages/Home"
import { OfferPage } from "./Components/OfferPage"
import { OrderNow } from "./Components/OrderNow"

function App() {
 return (<>
 <Try/>
 <BrowserRouter>
  <Navbar/>
 <Routes>
 <Route path="/order-now" element={<OrderNow/>}/>
 <Route path="/offer-page" element={<OfferPage/>}/>
 <Route path="/trending" element={<Trending/>} />
 <Route path="/veg" element={<Vegetables/>} />
 <Route path="details-of-item" element={<DetailsOfItem/>} />
 <Route path="/cart" element={<CartDetail/>}/>
 <Route path="catagary" element={<CatagaryOfItem/>} />
 <Route path="/" element={<Home/>}/>
 <Route index element={<Home/>}/>
  </Routes> 
  </BrowserRouter>
 

  </>)
}

export default App
