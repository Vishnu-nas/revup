import React from 'react';
import NavBar from './NavBar';
import SpBanner from '../images/lamborgini.png'
import Footer from './Footer';
import Tabs from './Tabs';
function AddPaymentView() {
  return (
    <div>
        <NavBar />
        <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr">
                <div className="container bnrCon h100">
                    <div className="spRow h100">
                        <h1>Payment</h1>
                        <p>Donec felis neque, pellentesque vel enim at, hendrerit vulputate augue. Donec eget odio in lorem congue</p>
                    </div>
                </div>
            </div>
        </div>
        <Tabs />
        <Footer />
    </div>
  );
}

export default AddPaymentView;
