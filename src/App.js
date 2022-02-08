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
import OrderCancel from './Pages/OrderCancel';
import OrderDelivered from './Pages/OrderDelivered';
import RideDetail from './Pages/RideDetail';
import ContactUs from './Pages/ContactUs';
import Cart from './Pages/Cart';
import MyRides from './Pages/MyRides';
import RideDetail2 from './Pages/RideDetail2';
import RideDetail3 from './Pages/RideDetail3';
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
          <Route path="/order-cancel" element={<OrderCancel />}>
          </Route>
          <Route path="/order-delivered" element={<OrderDelivered />}>
          </Route>
          <Route path="/ride-detail" element={<RideDetail />}>
          </Route>
          <Route path="/contact-us" element={<ContactUs />}>
          </Route>
          <Route path="/cart" element={<Cart />}>
          </Route>
          <Route path="/my-rides" element={<MyRides />}>
          </Route>
          <Route path="/ride-detail2" element={<RideDetail2 />}>
          </Route>
          <Route path="/ride-detail3" element={<RideDetail3 />}>
          </Route>
          {/* end */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
