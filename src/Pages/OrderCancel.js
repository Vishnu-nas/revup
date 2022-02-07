import React from 'react';
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import OrderCancelView from '../Componants/OrderCancelView';

function OrderCancel() {
  return (
    <div>
        <NavBar />
        <OrderCancelView />
        <Footer noTopSpace/>
    </div>
  );
}

export default OrderCancel;
