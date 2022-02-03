import React from 'react';
import tshirt from '../images/tshirt.png'
import watch from '../images/watch.png'
function OrdersView() {
  return (
    <div>
      <div className="ordersView">
        <div className="container">
          <div className="orderWrapper">
          <h1>Orders</h1>
          <div className="orderItem">
            <article>
                <div id="product--image" >
                  <div className="proImg">
                    <img src={tshirt} alt="" />
                  </div>
                </div>
                <div id="product--name" >
                  <div className="proName">
                    <span className='orderno'>ORDER #21252265</span>
                    <h2>Men'S T-Shirt Lamborghini</h2>
                    <span className='orderDate'>Order Placed On Nov 22</span>
                  </div>
                </div>
                <div id="product--rating" >
                  <div className="proRating">
                    <p>Rate this product now</p>
                    <div class="stars">
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </div>  
                  </div>
                </div>
            </article>
          </div>
          <div className="orderItem">
            <article>
                <div id="product--image" >
                  <div className="proImg">
                    <img src={watch} alt="" />
                  </div>
                </div>
                <div id="product--name" >
                  <div className="proName">
                    <span className='orderno'>ORDER #21252265</span>
                    <h2>Men'S T-Shirt Lamborghini</h2>
                    <span className='orderDate'>Order Placed On Nov 22</span>
                  </div>
                </div>
                <div id="product--rating" >
                  <div className="orderTrack">
                    <button className='trackBtn'>
                      TRACK -KH0213525
                    </button>
                  </div>
                </div>
            </article>
          </div>
          <div className="orderItem">
            <article>
                <div id="product--image" >
                  <div className="proImg">
                    <img src={tshirt} alt="" />
                  </div>
                </div>
                <div id="product--name" >
                  <div className="proName">
                    <span className='orderno'>ORDER #21252265</span>
                    <h2>Men'S T-Shirt Lamborghini</h2>
                    <span className='orderDate cancel'>Cancelled On Nov 09,2021</span>
                  </div>
                </div>
                <div id="product--rating" >
                  <div className="proRating">
                    <p>Rate this product now</p>
                    <div class="stars">
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </div>  
                  </div>
                </div>
            </article>
          </div>
          <div className="orderItem">
            <article>
                <div id="product--image" >
                  <div className="proImg">
                    <img src={watch} alt="" />
                  </div>
                </div>
                <div id="product--name" >
                  <div className="proName">
                    <span className='orderno'>ORDER #21252265</span>
                    <h2>Men'S T-Shirt Lamborghini</h2>
                    <span className='orderDate'>Order Placed On Nov 22</span>
                  </div>
                </div>
                <div id="product--rating" >
                  <div className="proRating">
                    <p>Rate this product now</p>
                    <div class="stars">
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </div>  
                  </div>
                </div>
            </article>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersView;
