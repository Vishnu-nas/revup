import React from 'react';
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import ShopDetailView from '../Componants/ShopDetailView';
import SpBanner from '../images/lamborgini.png'
function ShopDetail() {
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
        <ShopDetailView />   
        <Footer noTopSpace/>
    </div>
  );
}

export default ShopDetail;
