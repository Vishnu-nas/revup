import React from 'react';
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import watch from '../images/watch.png'
import tshirt from '../images/tshirt.png'
import CustomerReview from '../Componants/CustomerReview';
import {Link} from 'react-router-dom'
function ShopDetailView() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return (
    <div className="shopDetailPage">
        <div className="shopDetailWrapper container">
          <div className="shopDetailRow row justify-content-center">
            <div className="col-lg-4">
              <div className="spSlider">
              <Slider className="mainSlider" asNavFor={nav2} ref={slider1}>
                <div>
                  <div className="itemProd">
                    <div className="productBig">
                      <img src={watch} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                <div className="itemProd">
                    <div className="productBig">
                      <img src={tshirt} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                <div className="itemProd">
                    <div className="productBig">
                      <img src={watch} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                <div className="itemProd">
                    <div className="productBig">
                      <img src={tshirt} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                <div className="itemProd">
                    <div className="productBig">
                      <img src={watch} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                <div className="itemProd">
                    <div className="productBig">
                      <img src={tshirt} alt="" />
                    </div>
                  </div>
                </div>
            </Slider>

            <Slider
              asNavFor={nav1}
              ref={slider2}
              slidesToShow={5}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div>
                <div className="navThumb">
                <img src={watch} alt="" />
                </div>
              </div>
              <div>
              <div className="navThumb">
              <img src={tshirt} alt="" />
                </div>
              </div>
              <div>
              <div className="navThumb">
              <img src={watch} alt="" />
                </div>
              </div>
              <div>
              <div className="navThumb">
              <img src={tshirt} alt="" />
                </div>
              </div>
              <div>
              <div className="navThumb">
              <img src={watch} alt="" />
                </div>
              </div>
              <div>
              <div className="navThumb">
              <img src={tshirt} alt="" />
                </div>
              </div>
            </Slider>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="prodDetailDec">
                <span>Tonino Lamborghini</span>
                <h1>Tonino Lamborghini Spyder Chrono Watch</h1>
                <div class="review">
                    <span><i class="fa fa-star" aria-hidden="true"></i> 4.9 <span class="r-count">Reviews (254)</span></span>                                    
                </div>
                <div className="price">
                  <h2>$290.00</h2>
                </div>
                <div className="prodSingleDesc">
                  <h3>Product Description</h3>
                  <div className="psdin">
                    <div className="psdRow">
                      <span>Model Number </span>
                      <span>8845 </span>
                    </div>
                    <div className="psdRow">
                      <span>Part Number </span>
                      <span>5845MD4478-8858 </span>
                    </div>
                    <div className="psdRow">
                      <span>Display Type </span>
                      <span>Analog </span>
                    </div>
                    <div className="psdRow">
                      <span>Brand Color </span>
                      <span>Black</span>
                    </div>
                  </div>
                </div>
                <div className="sppageBtns">
                <Link to="/cart" ><button className="addTocartBtn">ADD TO CART</button> </Link>
                <Link to="/product-confirm-booking" ><button className="buyNowBtn">BUY NOW</button> </Link>                  
                </div>
              </div>
            </div>
          </div>
          <div className="wrapForReview">
            <CustomerReview />
          </div>
        </div>
    </div>
  );
}

export default ShopDetailView;
