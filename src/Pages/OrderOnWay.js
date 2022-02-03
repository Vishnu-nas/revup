import React from 'react';
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import OrderOnWayView from '../Componants/OrderOnWayView';
function OrderOnWay() {
  return (
    <div>
        <NavBar />        
        <OrderOnWayView />
        <Footer noTopSpace/>
    </div>
  );
}

export default OrderOnWay;
