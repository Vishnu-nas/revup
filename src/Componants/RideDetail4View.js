import React,{useState} from 'react';
import BlueCar from '../images/car-blue.png';
import SpBanner from '../images/lamborgini.png'
import Profile from '../images/prof.jpeg'
function RideDetail4View() {
    
  return (
    <div>
        <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr confirmBooking">
                <div className="container bnrCon h100 p-0">
                    <div className="cofirmBookingOnBnr">                        
                        <div className="row cbRow">
                        <div class="odHd">
                            <h1>Ride Details</h1>
                            <div class="report">
                                <span><i class="fas fa-flag"></i></span>
                                <span>Report</span>
                            </div>
                        </div>
                            <div className="col-lg-6">
                                <div className="cbLeft h100">                                    
                                    <div className="cbLcar h100">
                                        <img src={BlueCar} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="cbRight">
                                    <div className="cbRHd">
                                        <span className='orderId'>ORDER # 21252265</span>
                                        <h2>Lamborghini Aventador</h2>
                                        <span className='orderDate'>Oct 10, 10:00 am</span>
                                    </div>
                                    <ul className='bookingDetail'>
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
                    </div>
                </div>
            </div>
        </div>
        <div className="rideDetail">
            <div class="container p-0">
                <div class="row opRow">
                    <div class="col-lg-7 colOpLt">                        
                        <div className="colOptions">
                            <div className="userCal">
                                <div className="userLeft">
                                    <img src={Profile} alt="" />
                                </div>
                                <div className="userRt">
                                    <span className='usrNm'>Ethan Laura</span>
                                    <span className='usrInfo'>Is on the way to pickup location</span>
                                </div>
                            </div>
                            <div className="rideInfo">
                                <span>Your Ride Completed</span>
                            </div>
                            <div className="ratingReview">
                                <div className="rating">
                                    <h3>Rating & Review</h3>
                                    <div className="ratingAlter">
                                        <div class="ratingStars">
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                        </div>
                                        <div className="reviewEdit">
                                            <button>Edit Review</button>
                                        </div>
                                    </div>
                                    <div className="reviewDec">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a fringilla risus. Aenean id dolor ipsum. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a fringilla risus. Aenean id dolor ipsum. Lorem ipsum dolor sit amet, consectetur iscing elit. Donec a fringilla</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 colOpRt">
                        <div class="item-deliver">
                            <div class="item-deliver--edit">
                                <span>Pickup Location:</span>
                            </div>
                            <div class="item-deliver--location">
                                <div class="item-deliver--location--icon">
                                    <i class="fad fa-map-marker-alt"></i>
                                </div>
                                <div class="item-deliver--location--locname">
                                    <h2><span>Worls Trade Center</span>285 Fulton St, New York,NY 10007</h2>
                                </div>
                            </div>
                        </div>
                        <div className="calcRow bdrTp">
                            <div className="calcPart">
                                <div class="orderSum">
                                    <h2>Order Summary</h2>
                                    <div class="orders">
                                        <div class="orderin">
                                            <div class="ordItemName"><span>Total Item Price</span></div>
                                            <div class="itemPrice actualPrice"><span>$1399.00</span></div>
                                        </div>
                                        <div class="orderin">
                                            <div class="ordItemName"><span>Shipping Price</span></div>
                                            <div class="itemPrice"><span>$100.00</span></div>
                                        </div>
                                        <div class="orderin">
                                            <div class="ordItemName"><span>Service Charges</span></div>
                                            <div class="itemPrice"><span>$12.00</span></div>
                                        </div>
                                        <div class="orderin totalPrice">
                                            <div class="ordItemName"><span>TOTAL</span></div>
                                            <div class="itemPrice"><span>$1501.00</span></div>
                                        </div>
                                    </div>
                                    <div className="paidCred">
                                        <div class="paidviaCred">
                                            <div className="pcredwrap">                                            
                                                <div className="refundMsg">
                                                    <div className='refifpaid'> 
                                                        <span><i class="fa fa-check"></i></span> Paid via credit card   
                                                    </div>
                                                </div>  
                                            </div>                                                                           
                                        </div>                                    
                                    </div>                          
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

export default RideDetail4View;
