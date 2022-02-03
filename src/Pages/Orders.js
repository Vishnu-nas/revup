import React from 'react';
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import OrdersView from '../Componants/OrdersView';
import SpBanner from '../images/lamborgini.png'
function Orders() {
  return (
    <div>
        <NavBar />
        <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr">
                <div className="container bnrCon h100">
                </div>
            </div>
        </div>
        <OrdersView />
        <Footer noTopSpace/>
    </div>
  );
}

export default Orders;
