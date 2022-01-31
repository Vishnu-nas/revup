import React, { useState } from 'react';

function Tabs() {
 const [toggle,setToggle] = useState(1);
 const [extraClass, setExtraClass] = useState(1);
 const invertClass = (e) => 
 {
    setExtraClass(e);
 };
 const handleToggle = (e) =>{
    console.log("test",e);
    setToggle(e);
 }
  return (
    <div>
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
                        </div>
                        <div class={"tab-pane " + ( toggle === 2 ? "active" : "")}  id="tabs-2" role="tabpanel">
                            <p>Second Panel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Tabs;
