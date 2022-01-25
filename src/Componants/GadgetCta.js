import React from 'react';
import ctaBg from '../images/ctahm.png' 
import shirt from '../images/shirt.png'

function GadgetCta() {
  return (
    <div className="shopCta">
        <div className="container">
            <div className="row shopCtaRow" style={{ backgroundImage: `url('${ctaBg}')` }}>
                <div className="col-lg-6 h100 colSctaLeft">
                    <div className="shpGadL">
                        <span>SHOP GADGETS</span>
                        <h2>Deliver to Anywhere in the World</h2>
                        <button>Shop</button>
                    </div>
                </div>
                <div className="col-lg-4 h100 colSctaRight">
                    <div className="shpImgRight h100">
                        <img src={shirt} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default GadgetCta;
