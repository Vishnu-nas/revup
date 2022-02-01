import React from 'react';
import BlueCar from '../images/car-blue.png';
function ConfirmBookingView() {
  return (
    <div>
        
        <div className="confirmBooking">
            <div className="container">
                <div className="row cbRow">
                    <div className="col-lg-6">
                        <div className="cbLeft h100">
                            <h2>Confirm Your Booking</h2>
                            <div className="cbLcar h100">
                                <img src={BlueCar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cbRight">
                            <div className="cbRHd">
                                <span>TEXAS 202 HSZ</span>
                                <h2>Lamborghini Aventador</h2>
                            </div>
                            <ul className='bookingDetail'>
                                <li className='bdItem'>
                                    <div className="bdLeft">
                                        <span>Pick Up:</span>
                                    </div>
                                    <div className="bdRight">
                                        <div className="bdRicon">
                                            <i className='fad fa-map-marker-alt'></i>
                                        </div>
                                        <div className="optedItem">
                                            <span>Worls Trade Center</span>
                                            <h3>285 Fulton St, New York,NY 10007</h3>
                                        </div>
                                    </div>
                                </li>
                                <li className='bdItem'>
                                    <div className="bdLeft">
                                        <span>Start Trip:</span>
                                    </div>
                                    <div className="bdRight">
                                        <div className="bdRicon">
                                            <span className='dot'>
                                            </span>
                                        </div>
                                        <div className="optedItem">
                                            <span>Saturday, 08:00 pm*</span>
                                            <h3>Oct 16</h3>
                                        </div>
                                    </div>
                                </li>
                                <li className='bdItem'>
                                    <div className="bdLeft">
                                        <span>End Trip:</span>
                                    </div>
                                    <div className="bdRight">
                                        <div className="bdRicon">
                                            <span className='dot withWhite'>

                                            </span>
                                        </div>
                                        <div className="optedItem">
                                            <span>Saturday, 08:00 pm</span>
                                            <h3>Oct 17</h3>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="totalHrs">
                                <h3><i class="fas fa-stopwatch"></i> 5 Hours</h3>
                                <p>* A Maximum of 30 minutes of delay time can be expected based on the traffic.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row calcRow">
                    <div className="col-lg-6">
                        <div className="pickLocation">
                            <span className="plSpan">
                                <i className='fad fa-map-marker-alt'></i> Pickup Location
                            </span>
                            <div className="locName">
                                <span>Worls Trade Center</span>
                                <h2>285 Fulton St, New York,NY 10007</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="calcPart">
                            <span>Do you Have Promo Code?</span>
                            <div className="promoInput">
                                <input type="text" placeholder='Enter Promo Code'/>
                                <button>APPLY</button>
                            </div>
                            <div className="orderSum">
                                <h2>Order Summary</h2>
                                <div className="orders">
                                    <div className="orderin">
                                        <div className="ordItemName">
                                            <span>Ride Cost ($350/Hour)</span>
                                        </div>
                                        <div className="itemPrice actualPrice">
                                            <span>$1750.00</span>
                                        </div>
                                    </div>
                                    <div className="orderin">
                                        <div className="ordItemName">
                                            <span>Ride Cost ($350/Hour)</span>
                                        </div>
                                        <div className="itemPrice">
                                            <span>$31.00</span>
                                        </div>
                                    </div>
                                    <div className="orderin">
                                        <div className="ordItemName">
                                            <span>Ride Cost ($350/Hour)</span>
                                        </div>
                                        <div className="itemPrice">
                                            <span>-$100.00</span>
                                        </div>
                                    </div>
                                    <div className="orderin totalPrice">
                                        <div className="ordItemName">
                                            <span>TOTAL</span>
                                        </div>
                                        <div className="itemPrice">
                                            <span>$1681.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="proceedBtn">
                                    <button>PROCEED</button>
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

export default ConfirmBookingView;
