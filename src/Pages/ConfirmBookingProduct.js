import React from 'react';
import CbpView from '../Componants/CbpView';
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import SpBanner from '../images/lamborgini.png'
function ConfirmBookingProduct() {
  return (
    <div>
        <NavBar />
        <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr">
                <div className="container bnrCon h100">
                    <div className="spRow h100">
                        <h1>Shop</h1>
                        <p>Delivered to anywhere in the world</p>
                    </div>
                </div>
            </div>
        </div>
        <CbpView />
        <Footer noTopSpace/>
    </div>
  );
}

export default ConfirmBookingProduct;
