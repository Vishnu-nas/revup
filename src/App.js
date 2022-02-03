import './App.scss';
import './css/animate.css';
import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CarDetails from './Pages/CarDetails';
import Login from './Pages/Login';
import CreateAccount from './Pages/CreateAccount';
import VerifyAccount from './Pages/VerifyAccount';
import UserInfo from './Pages/UserInfo';
import ConfirmBooking from './Pages/ConfirmBooking';
import AddPayment from './Pages/AddPayment';
import ThankYou from './Pages/ThankYou';
import Shop from './Pages/Shop';
import ShopDetail from './Pages/ShopDetail';
import ConfirmBookingProduct from './Pages/ConfirmBookingProduct';
import Orders from './Pages/Orders';
import OrderDetail from './Pages/OrderDetail';
import OrderOnWay from './Pages/OrderOnWay';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>   
          <Route path="/car-detail" element={<CarDetails />}>
          </Route>     
          <Route path="/login" element={<Login />}>
          </Route>  
          <Route path="/create-account" element={<CreateAccount />}>
          </Route>
          <Route path="/verify-account" element={<VerifyAccount />}>
          </Route>
          <Route path="/user-info" element={<UserInfo />}>
          </Route>
          <Route path="/confirm-booking" element={<ConfirmBooking />}>
          </Route>
          <Route path="/add-payment" element={<AddPayment />}>
          </Route>
          <Route path="/thank-you" element={<ThankYou />}>
          </Route>


          {/* Shop products */}

          <Route path="/shop" element={<Shop />}>
          </Route>
          <Route path="/shop-detail" element={<ShopDetail />}>
          </Route>
          <Route path="/product-confirm-booking" element={<ConfirmBookingProduct/>}>
          </Route>
          <Route path="/orders" element={<Orders />}>
          </Route>
          <Route path="/order-detail" element={<OrderDetail />}>
          </Route>
          <Route path="/order-onway" element={<OrderOnWay />}>
          </Route>
          {/* end */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
