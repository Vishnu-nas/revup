import React from 'react';
import CartView from '../Componants/CartView';
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import SpBanner from '../images/lamborgini.png';
function Cart() {
  return (
    <div>
        <NavBar />
        <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr">                
            </div>
        </div>
        <CartView />
        <div className="orderPayment payOrder">
            <div className="container">
                <div className="row opRow calcRow">
                    <div className="col-lg-6 colOpLt">
                        <div className="item-deliver">
                            <div className="calcPart noArt">
                              <span>Do you Have Promo Code?</span>
                              <div class="promoInput">
                                  <input type="text" placeholder="Enter Promo Code" />
                                  <button>APPLY</button>
                              </div>
                              <div className="cartMsg">
                                <span><i class="fa fa-shield-alt"></i> Safe and secure payments. 100% authentic products</span>
                              </div>
                           </div>
                        </div>
                    </div>
                    <div className="col-lg-6 colOpRt">
                    <div className="calcSum">
                        <div className="calcPart noEff">
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
                                <div class="proceedBtn"><button>PROCEED</button></div>                    
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
        <Footer noTopSpace />
    </div>
  );
}

export default Cart;
