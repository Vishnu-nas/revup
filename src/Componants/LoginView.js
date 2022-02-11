import React from 'react';
import SpBanner from '../images/lamborgini.png';
import regBg from '../images/regImg.png';
import {Link} from 'react-router-dom'
function LoginView() {
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
                    <div className="col-lg-6 colRgRight p-0">
                        <div className="rgRtWrap">
                            <div className="rgRtHd">
                                <h2>Welcome Back!</h2>
                                <span>Sign in to your account</span>
                            </div>
                            <div action="#" class="register-form">
                                <div className="formWrap">
                                    <div className="form-controller">
                                        <label htmlFor="">Email</label>
                                        <input type="text" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-controller">
                                        <label htmlFor="">Password</label>
                                        <input type="password" name="password" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="forgetPass">
                                <p class="fp"><a href="#">Forgot Password</a></p>
                                </div>
                                <Link to="/car-detail" ><button type="submit" class="btn">Login</button></Link>                                
                                <p class="message">New User? <a href="#">Register</a></p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LoginView;
