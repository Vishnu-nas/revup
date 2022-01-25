import React from 'react';
import profile from '../images/prof.jpeg'
function CustomerReview() {
  return (
    <div>
        <div className="cusReview">
            <div className="container">
                <h2>Customer Reviews</h2>
                <div className="row crRow">
                    <div className="col-lg-6 colReview">
                        <div className="reviewHd">
                            <div className="rhdThumb">
                                <img src={profile} alt="" />
                            </div>
                            <div className="rhdReview">
                                <h2>Liam <span>2 days ago</span></h2>
                                <div className="reviewStar">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cusComment">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eleifend tellus, sed volutpat nisi. Vestibulum eros neque, accumsan id tellus vel, maximus varius nulla. Proin vel laoreet ligula. Praesent suscipit nulla ut lacus commod</p>
                        </div>
                    </div>
                    <div className="col-lg-6 colReview">
                        <div className="reviewHd">
                            <div className="rhdThumb">
                                <img src={profile} alt="" />
                            </div>
                            <div className="rhdReview">
                                <h2>Liam <span>2 days ago</span></h2>
                                <div className="reviewStar">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cusComment">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eleifend tellus, sed volutpat nisi. Vestibulum eros neque, accumsan id tellus vel, maximus varius nulla. Proin vel laoreet ligula. Praesent suscipit nulla ut lacus commod</p>
                        </div>
                    </div>
                    <div className="col-lg-6 colReview">
                        <div className="reviewHd">
                            <div className="rhdThumb">
                                <img src={profile} alt="" />
                            </div>
                            <div className="rhdReview">
                                <h2>Liam <span>2 days ago</span></h2>
                                <div className="reviewStar">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cusComment">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eleifend tellus, sed volutpat nisi. Vestibulum eros neque, accumsan id tellus vel, maximus varius nulla. Proin vel laoreet ligula. Praesent suscipit nulla ut lacus commod</p>
                        </div>
                    </div>
                    <div className="col-lg-6 colReview">
                        <div className="reviewHd">
                            <div className="rhdThumb">
                                <img src={profile} alt="" />
                            </div>
                            <div className="rhdReview">
                                <h2>Liam <span>2 days ago</span></h2>
                                <div className="reviewStar">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cusComment">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eleifend tellus, sed volutpat nisi. Vestibulum eros neque, accumsan id tellus vel, maximus varius nulla. Proin vel laoreet ligula. Praesent suscipit nulla ut lacus commod</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CustomerReview;
