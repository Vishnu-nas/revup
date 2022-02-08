import React from 'react';
import Footer from '../Componants/Footer';
import MyRidesView from '../Componants/MyRidesView';
import NavBar from '../Componants/NavBar';
import SpBanner from '../images/lamborgini.png';

function MyRides() {
  return (
    <div>
        <NavBar/>
        <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr">
            </div>
        </div>
        <MyRidesView />
        <Footer noTopSpace/>
    </div>
  );
}

export default MyRides;
