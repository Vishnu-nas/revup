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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
