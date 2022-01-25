import React from 'react';
import BookCabCta from '../Componants/BookCabCta';
import BookNow from '../Componants/BookNow';
import CustomerReview from '../Componants/CustomerReview';
import Footer from '../Componants/Footer';
import GadgetCta from '../Componants/GadgetCta';
import NavBar from '../Componants/NavBar';
import SingleProductBanner from '../Componants/SingleProductBanner';
import Specifications from '../Componants/Specifications';

function carDetails() {
  return (
    <div>
        <NavBar />
        <SingleProductBanner />
        <BookNow />
        <Specifications />
        <div className="description">
            <div className="container">
                <div className="decHd">
                    <h2>Description</h2>
                </div>
                <div className="decCon">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eleifend tellus, sed volutpat nisi. Vestibulum eros neque, accumsan id tellus vel, maximus varius nulla. Proin vel laoreet ligula. Praesent suscipit nulla ut lacus commodo venenatis eu in odio. Nam imperdiet elit nisi, rhoncus consectetur sapien interdum vitae. Cras at elit id lacus semper faucibus a et turpis. Nam egestas lorem sodales nisi ultricies eleifend. NullLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eleifend tellus, sed volutpat nisi. Vestibulum eros neque, accumsan id tellus vel, maximus varius nulla. Proin vel laoreet ligula. Praesent suscip</p>
                </div>
            </div>
        </div>
        <CustomerReview />
        <BookCabCta />
        <GadgetCta />
        <Footer />
    </div>
  );
}

export default carDetails;
