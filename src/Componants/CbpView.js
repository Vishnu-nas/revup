import React, { useState } from 'react';
import watch from '../images/watch.png'
function CbpView() {
    const [increment,setIncrement] = useState(1)
    const handleIncrement = () =>{
        setIncrement(increment + 1);
    }
    const handleDecrement = () =>{
        if(increment != 0){
            setIncrement(increment - 1);
        }
    }
  return (
    <div>
        <div className="productConfirmBkg">
            <div className="container">
                <div className="pcbRow row">
                    <div className="col-lg-5 col-sm-12 pcbColL">
                        <div className="pcbLimg">
                            <img src={watch} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-12 pcbColR">
                        <div className="prodDetailDec prodDec">
                            <span>Tonino Lamborghini</span>
                            <h1>Tonino Lamborghini Spyder Chrono Watch</h1>
                            <div className="price proPrice">
                                <h2>$290.00</h2>
                            </div>
                            <div className="countAlter">
                                <span className='minus otrCircle' onClick={handleDecrement}>-</span>
                                <span className="countNo">{increment}</span>
                                <span className='plus otrCircle' onClick={handleIncrement}>+</span>
                            </div>
                            <div className="importantNote">
                                <p><i class="fa fa-shield-alt"></i> Safe and secure payments. 100% authentic products</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row calcRow">
                    <div className="col-lg-6 pl-0">
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
                    <div className="col-lg-6 pr-0">
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

export default CbpView;
