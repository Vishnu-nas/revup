import React from 'react';
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import OrderDetailView from '../Componants/OrderDetailView';
function OrderDetail() {
  return (
    <div>
        <NavBar />        
        <OrderDetailView />
        <Footer noTopSpace/>
    </div>
  );
}

export default OrderDetail;
