import './App.scss';
import './css/animate.css';
import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CarDetails from './Pages/CarDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>   
          <Route path="/car-detail" element={<CarDetails />}>
          </Route>       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
