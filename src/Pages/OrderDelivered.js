import React from 'react';
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import OrderDeliveredView from '../Componants/OrderDeliveredView';

function OrderDelivered() {
  return (
    <div>
      <NavBar />
      <OrderDeliveredView />
      <Footer noTopSpace/>
    </div>
  );
}

export default OrderDelivered;
