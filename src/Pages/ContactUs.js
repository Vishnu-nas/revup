import React from 'react';
import ContactView from '../Componants/ContactView';
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import SpBanner from '../images/lamborgini.png';
function ContactUs() {
  return (
    <div>
        <NavBar />
        <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr">
                <div class="container bnrCon h100">
                    <div class="spRow h100">
                        <h1>Contact Us</h1>
                        <p>Delivered to anywhere in the world</p>
                    </div>
                </div>
            </div>
        </div>
        <ContactView />
        <Footer noTopSpace/>
    </div>
  );
}

export default ContactUs;
