import React from 'react';
import ctaBg from '../images/ctahm.png' 

function BookCabCta() {
  return (
    <div className="contactCta">
        <div className="container">
            <div className="row m-0">
                <div className="ctaRow" style={{ backgroundImage: `url('${ctaBg}')` }}>
                    <h2>Do you want to book a cab for your party program?</h2>
                    <button>CONTACT US</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default BookCabCta;
