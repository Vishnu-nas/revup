import React,{useState} from 'react';
import BlueCar from '../images/car-blue.png';
import SpBanner from '../images/lamborgini.png'
import SupportPopUp from './SupportPopUp';
import Profile from '../images/prof.jpeg'
function RideDetail3View() {
  const [support,setSupport] = useState(false);
  const handleSupportClose = () => setSupport(false);
  const handleSupportShow = () => setSupport(true);
  return (
    <div>
        <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr confirmBooking">
                <div className="container bnrCon h100 p-0">
                    <div className="cofirmBookingOnBnr">
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
                    </div>
                </div>
            </div>
        </div>
        <div className="rideDetail">
            <div class="container p-0">
                <div class="row opRow">
                    <div class="col-lg-6 colOpLt">
                        <div class="item-deliver">
                            <div class="item-deliver--edit"><span>Pickup Location:</span></div>
                            <div class="item-deliver--location">
                            <div class="item-deliver--location--icon"><i class="fad fa-map-marker-alt"></i></div>
                            <div class="item-deliver--location--locname">
                                <h2><span>Worls Trade Center</span>285 Fulton St, New York,NY 10007</h2>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 colOpRt withDetail">
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
                            <div className="connect">
                                <div className="arrival">
                                    <span>Arrives in 3 min</span>
                                </div>
                                <div className="call connWith">
                                    <i className='fa fa-phone'></i>
                                </div>
                                <div className="msg connWith">
                                    <i className='fa fa-comment'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="locationRow">
                        <div className="google-map-code">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> 
                        </div>
                    </div>
                </div>                
            </div>
        </div>
        {
            support && <SupportPopUp handleSupportClose={handleSupportClose} support={support} />
        }
    </div>    
  );
}

export default RideDetail3View;
