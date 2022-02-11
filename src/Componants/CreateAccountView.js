import React from 'react';
import SpBanner from '../images/lamborgini.png';
import regBg from '../images/regImg.png';
import {Link} from 'react-router-dom'
function CreateAccountView() {
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
                                <h2>Create Account</h2>
                                <span>Please enter your mobile number to receive a verification code to create an account.</span>
                            </div>
                            <div action="#" class="register-form">
                                <div className="formWrap">
                                    <div className="form-controller">
                                        <label htmlFor="">Mobile</label>
                                        <input type="text" name="email" placeholder="Mobile" />
                                    </div>
                                </div>
                                <Link to="/verify-account" ><button type="submit" class="btn">Next</button></Link>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CreateAccountView;
