import React from 'react';
import Car2 from '../images/car2.png'
function BookNow() {
  return (
    <div>
        <div className="bookNowSection">
            <div className="container">
                <div className="wrapBookNow">
                    <div className="row bnRow">
                        <div className="col-lg-5 col-sm-12">
                            <div className="pdLeft">
                                <img src={Car2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-sm-12">
                            <div className="pdRight">
                                <h2>Lamborghini Aventador</h2>
                                <div class="review">
                                    <span><i class="fa fa-star" aria-hidden="true"></i> 4.9 </span><span class="r-count">Reviews (254)</span>
                                </div>
                                <div className="priceForCar">
                                    <h2>$292.00<span>/hour</span></h2>
                                    <div className="carAlert">
                                        <span><i className='fad fa-bell-exclamation'></i>Price per hour may change depend up on peak time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="enquiryArea">
                        <div className="enqLeft">
                            <div className="elItem">
                                <span><i class="fas fa-stopwatch"></i> Duration</span>
                                <h3>Set Duration <i class="fad fa-angle-right"></i></h3>
                            </div>
                            <div className="elItem">
                                <span><i class="fas fa-clock"></i> Ride Date & Time</span>
                                <h3>Choose Date & Time <i class="fad fa-angle-right"></i></h3>
                            </div>
                            <div className="elItem">
                                <span><i class="fad fa-map-marker-alt"></i> Set Pickup Location</span>
                                <h3>Set Location <i class="fad fa-angle-right"></i></h3>
                            </div>
                        </div>
                        <div className="enqRight">
                            <div className="booKNow">
                                <div className="bnBtn">
                                    <button className='btnBn'>BOOK NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default BookNow;
