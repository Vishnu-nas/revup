import React, { useState } from 'react';
import Cards from '../images/cards.png'
import BlueCar from '../images/car-blue.png';
import MasterCard from '../images/master.png'; 
import AddCard from './AddCard'; 
function Tabs() {
 const [toggle,setToggle] = useState(1);
 const [extraClass, setExtraClass] = useState(1);
 const [addCard, setAddCard] = useState(false);
 const invertClass = (e) => 
 {
    setExtraClass(e);
 };
 const handleToggle = (e) =>{
    console.log("test",e);
    setToggle(e);
 }
 const handleAddCardClose = () => setAddCard(false);
 const handleAddCardShow = () => setAddCard(true);
  return (
    <div>
        {
            addCard === true && <AddCard handleAddCardClose={handleAddCardClose} addCard={addCard}/>
        }
        <div className="payMethods">
            <div className="container">
                <div className="pmRow">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <span 
                            class={"nav-link " + ( toggle === 1 ? "active" : "")} 
                            data-toggle="tab" role="tab"
                            onClick={() =>handleToggle(1)}
                            >Add Payment method</span>
                        </li>
                        <li class="nav-item">
                            <span 
                            class={"nav-link " + ( toggle === 2 ? "active" : "")} 
                            data-toggle="tab" role="tab"
                            onClick={() =>handleToggle(2)}
                            >Confirm Booking</span>
                        </li>
                    </ul> 
                    <div class="tab-content">
                        <div class={"tab-pane " + ( toggle === 1 ? "active" : "")}  id="tabs-1" role="tabpanel">
                            <div className="paneWrap">
                                <div className="row pwRow">
                                    <div className="col-lg-6">
                                        <h2>Your Payment Method</h2>
                                        <div className="pmLeft">
                                            <label className='bkCredHd'>
                                                <div className="ptBank" for="q1-n">
                                                    <div className="bankNm nmbk">
                                                        <span></span>
                                                    </div>
                                                    <div className="nameOnCard">
                                                        <span>Name on Card </span>
                                                    </div>
                                                    <div className="expires">
                                                        <span>Expires on</span>
                                                    </div>
                                                </div>
                                            </label>
                                            <label className= {extraClass === 1 ? "active" : ""}>
                                                <input type="radio" name="q1" id="q1-n" value="1" onChange={() => invertClass(1)} defaultChecked={extraClass === 1}/>
                                                <div className="ptBank" for="q1-n">
                                                    <div className="bankNm">
                                                        <h3>Bank of America Corp.</h3>
                                                        <span>ending in 5854</span>
                                                    </div>
                                                    <div className="nameOnCard">
                                                        <span>Sam Jacob</span>
                                                    </div>
                                                    <div className="expires">
                                                        <span>08/2028 </span>
                                                    </div>
                                                </div>
                                            </label>
                                            <label className= {extraClass === 2 ? "active" : ""}>
                                                <input type="radio" name="q1" id="q2-n" value="2"  onChange={() => invertClass(2)}/>
                                                <div className="ptBank" for="q2-n">
                                                    <div className="bankNm">
                                                        <h3>Bank of America Corp.</h3>
                                                        <span>ending in 5854</span>
                                                    </div>
                                                    <div className="nameOnCard">
                                                        <span>Sam Jacob</span>
                                                    </div>
                                                    <div className="expires">
                                                        <span>08/2028 </span>
                                                    </div>
                                                </div>
                                            </label>
                                            <label className= {extraClass === 3 ? "active" : ""}>
                                                <input type="radio" name="q1" id="q3-n" value="3"  onChange={() => invertClass(3)}/>
                                                <div className="ptBank" for="q3-n">
                                                    <div className="bankNm">
                                                        <h3>Bank of America Corp.</h3>
                                                        <span>ending in 5854</span>
                                                    </div>
                                                    <div className="nameOnCard">
                                                        <span>Sam Jacob</span>
                                                    </div>
                                                    <div className="expires">
                                                        <span>08/2028 </span>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="addCardBtn">
                                            <button className='acBtn' onClick={handleAddCardShow}>
                                                <span>+</span> ADD YOUR CARD
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="orderSy">
                                            <div className="calcRow">
                                            <div className="calcPart">
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
                                                        <div className="orderin totalPrice clrOrange">
                                                            <div className="ordItemName">
                                                                <span>TOTAL</span>
                                                            </div>
                                                            <div className="itemPrice">
                                                                <span>$1681.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cardAccept">
                                                        <p>We accepts all major credit and debit cards:</p>
                                                        <div className="cards">
                                                            <img src={Cards} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <div className="paymentRow">
                                    <div className="procPaybtn">
                                        <button className='payBtn'>
                                            Proceed to payment
                                        </button>
                                    </div>
                                </div>                              
                            </div>
                        </div>
                        <div class={"tab-pane " + ( toggle === 2 ? "active" : "")}  id="tabs-2" role="tabpanel">
                            <div className="confirmBooking confirmTab">
                                <div className="row cbRow">
                                    <div className="col-lg-6 colLcb">
                                        <div className="cbLeft h100">
                                            <div className="cbLcar h100">
                                                <img src={BlueCar} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 colRcb">
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
                                <div className="row payCalcRow">
                                    <div className="col-lg-6 colPayLeft">
                                        <h2>Payment Method</h2>
                                        <div className="payLin">
                                            <div className="pllleft">
                                                <span>Credit Card</span>
                                            </div>
                                            <div className="pllrt">
                                                <div className="cardIcon">
                                                    <img src={MasterCard} alt="" />
                                                </div>
                                                <div className="accNo">
                                                    <h2>XXXX XXXX X9565</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="calcRow calcPayment">
                                        <div className="calcPart">
                                            <div className="orderSum">
                                                <h2>Payment</h2>
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
                                                
                                            </div>
                                        </div>
                                        </div>                                        
                                    </div>
                                </div>
                                <div class="paymentRow">
                                    <div class="procPaybtn">
                                        <button class="payBtn">Proceed to payment</button>
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

export default Tabs;
