import React from 'react';
import SpBanner from '../images/lamborgini.png';
import regBg from '../images/regImg.png';
import {Link} from 'react-router-dom'
function UserInfoView() {
  return (
    <div>
         <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr">
               
            </div>
        </div>
        <div className="accRegistration">
            <div className="container">
                <div className="row accRow">
                    <div className="col-lg-6 colRgLeft p-0">
                        <div className="rgLeftWrap">
                            <div className="rgLcon h100">
                                <div className="rgLHd">
                                    <h2><span>Enjoy the </span> <span>Experience with us!</span></h2>
                                </div>
                                <div className="rgLimg">
                                    <img src={regBg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 colRgRight p-0 align-self-center">
                        <div className="rgRtWrap">
                            <div className="rgRtHd">
                                <h2>Your Information</h2>
                                <span>Please update your account information</span>
                            </div>
                            <div action="#" class="register-form">
                                <div className="formWrap">
                                    <div className="form-controller">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" name="fn" placeholder="First Name" />
                                    </div>
                                    <div className="form-controller">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" name="ln" placeholder="Last Name" />
                                    </div>
                                    <div className="form-controller">
                                        <label htmlFor="">Email</label>
                                        <input type="text" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-controller">
                                        <label htmlFor="">Password</label>
                                        <input type="text" name="pw" placeholder="Password" />
                                    </div>
                                </div>
                                <p class="message pptu">By signing up, you're agree to our <a href="#">Privacy Policy & Terms of User</a></p>
                                <Link to="/login" ><button type="submit" class="btn">CREATE ACCOUNT</button></Link>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default UserInfoView;
