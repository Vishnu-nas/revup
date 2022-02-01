import React from 'react';
import NavBar from '../Componants/NavBar';
import SpBanner from '../images/lamborgini.png'
import BlueCar from '../images/car-blue.png';
import Footer from '../Componants/Footer';
import GadgetCta from '../Componants/GadgetCta';
function ThankYou() {
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
        <div className="confirmBooking">
            <div className="container">
                <div className="row cbRow thankRow">
                    <div className="col-lg-5">
                        <div className="cbLeft h100">
                            <div className="cbLcar h100">
                                <img src={BlueCar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="cbRight">
                            <div className="thankYouDec">
                                <h2>Thank You!</h2>
                                <p>You have successfully booked a ride <span>on 16 Oct, Saturday at 08:00pm</span></p>
                                <div className="bookDetail">
                                    <button className='bookDtlbtn'>
                                        BOOKING DETAILS
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GadgetCta />
            </div>
        </div> 
        <Footer noTopSpace/>       
    </div>
  );
}

export default ThankYou;
