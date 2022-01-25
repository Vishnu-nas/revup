import React from 'react';
import SpBanner from '../images/lamborgini.png'
function SingleProductBanner() {
  return (
    <div>
        <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
                    <div className="WrapperBnr">
                        <div className="container bnrCon h100">
                            <div className="spRow h100">
                               <h1>Enjoy the Experience with us!</h1>
                               <p>Donec felis neque, pellentesque vel enim at, hendrerit vulputate augue. Donec eget odio in lorem congue</p>
                            </div>
                        </div>
                    </div>
            </div>
    </div>
  );
}

export default SingleProductBanner;
