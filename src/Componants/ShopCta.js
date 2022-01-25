import React from 'react';
import iphone from '../images/iphone.png'
import graph from '../images/graph.png'
import appStore from '../images/appstore.png'
import gplay from '../images/gplay.png'
function ShopCta() {
  return (
    <div>
        <div className="shopCta DownloadCta">
                <div className="container">
                    <div className="row shopCtaRow DownloadCtaRow" style={{ backgroundImage: `url('${graph}')` }}>
                        <div className="col-lg-4 h100 colSctaLeft">
                            <div className="shpGadL">
                                <div className="ddLeft">
                                    <h2>Download the free Revup App Now</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="bnrLBtns">
                                        <div className="btnbnr">
                                            <img src={appStore} alt="" />
                                        </div>
                                        <div className="btnbnr">
                                            <img src={gplay} alt="" />
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 h100 colSctaRight">
                            <div className="shpImgRight h100 sctaRt">
                                <img src={iphone} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default ShopCta;
