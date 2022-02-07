import React from 'react';
import CartView from '../Componants/CartView';
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import SpBanner from '../images/lamborgini.png';
function Cart() {
  return (
    <div>
        <NavBar />
        <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr">                
            </div>
        </div>
        <CartView />
        <Footer noTopSpace />
    </div>
  );
}

export default Cart;
