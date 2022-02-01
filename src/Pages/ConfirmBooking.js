import React from 'react';
import NavBar from '../Componants/NavBar';
import ConfirmBookingView from '../Componants/ConfirmBookingView';
import SingleProductBanner from '../Componants/SingleProductBanner';
import Footer from '../Componants/Footer';
function ConfirmBooking() {
  return (
    <div>
        <NavBar />
        <SingleProductBanner />
        <ConfirmBookingView />
        <Footer noTopSpace />
    </div>
  );
}

export default ConfirmBooking;
