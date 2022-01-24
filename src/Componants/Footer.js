import React from 'react';

function Footer() {
  return (
        <div>
            <div className="footer pt80">
                <div className="container">
                    <div className="row footerRow">
                        <div className="col-lg-6 p-0">
                            <div className="fooIn fif">
                                <h3>About Revup</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eleifend tellus, sed volutpat nisi. Vestibulum eros neque, accumsan id tellus ve</p>
                                <div className="ssicons">
                                    <a href="#" className='ssItem facebook'>
                                        <i className='fab fa-facebook-f'></i>
                                    </a>
                                    <a href="#" className='ssItem twitter'>
                                        <i className='fab fa-twitter'></i>
                                    </a>
                                    <a href="#" className='ssItem linkedin'>
                                        <i className='fab fa-linkedin-in'></i>
                                    </a>
                                    <a href="#" className='ssItem instagram'>
                                        <i className='fab fa-instagram'></i>
                                    </a>
                                    <a href="#" className='ssItem youtube'>
                                        <i className='fab fa-youtube'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0">
                            <div className="fooIn fis">
                                <h3>Contact Us</h3>
                                <ul className='fooUl'>
                                    <li>
                                        <span className='flicon'>
                                            <i className='fa fa-map-marker-alt'></i>
                                        </span>
                                        <span className='flDec'>
                                            <p>2746 Victoria Park Avenue Tornado, Ontario M9J 4AW Kenya</p>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='flicon'>
                                            <i className='fa fa-envelope'></i>
                                        </span>
                                        <span className='flDec'>
                                            <p>abc@gmail.com</p>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0">
                            <div className="fooIn">
                                <h3>Services</h3>
                                <ul className='fooUl'>
                                    <li>Party Ride</li>
                                    <li>Services</li>
                                    <li>How it Works</li>
                                    <li>More Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="fooCpyRight">
                        <div className="cpL">
                            <p>© Copyright 2021 Revup. All rights reserved</p>
                        </div>
                        <div className="cpR">
                            <span><a href="#">Privacy Policy </a></span>
                            <span className='seperator'>|</span>
                            <span> <a href="#">Terms & Condition</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Footer;
