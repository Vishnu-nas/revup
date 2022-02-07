import React,{useState} from 'react';
import BlueCar from '../images/car-blue.png';
import SpBanner from '../images/lamborgini.png'
import SupportPopUp from './SupportPopUp';
function RideDetailView() {
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
                    <div class="col-lg-6 colOpRt">
                        <div className="cancelRide">
                            <button className='cancelBtn' onClick={handleSupportShow}>CANCEL RIDE</button>
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

export default RideDetailView;
