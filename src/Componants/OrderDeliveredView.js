import React from 'react';
import SpBanner from '../images/lamborgini.png'
import watch from '../images/watch.png'

function OrderDeliveredView() {
  return (
    <div>
         <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr">
                <div className="container bnrCon h100 p-0">
                    <div className="orderSRow">
                        <div className="odHd">
                            <h1>Order Details</h1>
                            <div className="report">
                                <span><i class="fas fa-flag"></i></span>
                                <span>Report</span>
                            </div>
                        </div>
                        <div class="row cbRow orderSingleRow">
                            <div class="col-lg-5">
                                <div class="cbLeft h100">
                                    <div class="cbLpro h100"><img src={watch} alt="" /></div>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="cbRight">
                                    <div class="orderDetailRt">
                                        <div className="orderDate">
                                            <span className='ordId'>ORDER # 21252265</span>
                                            <span className='ordDt'>Oct 10, 10:00 am</span>
                                        </div>
                                        <div className="orderedProduct">
                                            <h2>
                                            <span>Tonino Lamborghini</span>
                                            Tonino Lamborghini Spyder Chrono Watch
                                            </h2>
                                        </div>
                                        <div className="orderInfo">
                                            <div className="oiLeft orderDelivered">
                                                <span className='alertOrder'>
                                                    <i className="fas fa-shipping-fast"></i>
                                                    <span>
                                                    Your order has been delivered
                                                        <span className='cancelDate'>on Nov 23,2021</span>
                                                    </span>                                                
                                                </span>                                                
                                            </div>
                                            <div className="oiRt"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="orderPayment">
            <div className="container p-0">
                <div className="row opRow">
                    <div className="col-lg-6 colOpLt">
                        <div className="item-deliver">
                            <div className="item-deliver--edit">
                                <span>Deliver To</span>
                            </div>
                            <div className="item-deliver--location">
                                <div className="item-deliver--location--icon">
                                    <i class="fad fa-map-marker-alt"></i>
                                </div>
                                <div className="item-deliver--location--locname">
                                    <h2>
                                        <span>Worls Trade Center</span>
                                        285 Fulton St, New York,NY 10007
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 colOpRt">
                    <div className="calcRow">
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
                                                    <span><i class="fa fa-check"></i></span> Paid via credit card ending 55478  
                                                </div>
                                                <p>Refund Initiated</p>
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

export default OrderDeliveredView;
