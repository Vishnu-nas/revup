import React from 'react';
import appStore from '../images/appstore.png'
import gplay from '../images/gplay.png'
import bg from '../images/bg-banner.png'  
import ctaBg from '../images/ctahm.png' 
import bnrCar from '../images/bnrCar.png'
import servCar from '../images/bnrCar1.png'
import Deal from '../images/deal.svg'
import dollar from '../images/dollar.svg'
import call from '../images/call.svg'
import shirt from '../images/shirt.png'
import car from '../images/car.png'
import location from '../images/location.png'
import book from '../images/book.png'
import iphone from '../images/iphone.png'
import graph from '../images/graph.png'
import Faqs from '../Componants/Faqs';
import NavBar from '../Componants/NavBar'
import CarSlider from '../Componants/CarSlider'
import Footer from '../Componants/Footer'
function Home() {
  return (
        <div>
            <NavBar/>
            <div className="bannerSec" style={{ backgroundImage: `url('${bg}')` }}>
                    <div className="WrapperBnr">
                        <div className="container bnrCon h100">
                            <div className="row h100">
                                <div className="col-lg-5 colBnrLeft">
                                    <div className="bnrLeft">
                                        <h1>Enjoy the Experience with us!</h1>
                                        <p>Donec felis neque, pellentesque vel enim at, hendrerit vulputate augue. Donec eget odio in lorem congue</p>
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
                                <div className="col-lg-7 align-self-center colBnrRight h100">
                                    <div className="bnrRight h100">
                                        <div className="bnrRin h100">
                                            <img src={bnrCar} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="prodSlider">
                <CarSlider/> 
            </div>
            <div className="contactCta">
                <div className="container">
                    <div className="row m-0">
                        <div className="ctaRow" style={{ backgroundImage: `url('${ctaBg}')` }}>
                            <h2>Do you want to book a cab for your party program?</h2>
                            <button>CONTACT US</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="servicesSec">                
                <div className="container">
                <div className="servHd">
                    <span>SERVICES</span>
                    <h2>Feel the best experience with our rental deals.</h2>
                </div>
                    <div className="row servRow">
                        <div className="col-lg-6 serColL">
                            <div className="serImg">
                                <img src={servCar} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 serColR">
                            <div className="servList">
                                <ul className='servUl'>
                                    <li className='serli'>
                                        <div className="liLft">
                                            <img src={Deal} alt="" />
                                        </div>
                                        <div className="liRight">
                                            <h3>Deals for Every Budget</h3>
                                            <p>Donec felis neque, pellentesque vel enim at, hendrerit vulputate augue. Donec eget odio in lorem congue</p>
                                        </div>
                                    </li>
                                    <li className='serli'>
                                        <div className="liLft">
                                            <img src={dollar} alt="" />
                                        </div>
                                        <div className="liRight">
                                            <h3>Deals for Every Budget</h3>
                                            <p>Donec felis neque, pellentesque vel enim at, hendrerit vulputate augue. Donec eget odio in lorem congue</p>
                                        </div>
                                    </li>
                                    <li className='serli'>
                                        <div className="liLft">
                                            <img src={call} alt="" />
                                        </div>
                                        <div className="liRight">
                                            <h3>Deals for Every Budget</h3>
                                            <p>Donec felis neque, pellentesque vel enim at, hendrerit vulputate augue. Donec eget odio in lorem congue</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            <div className="howItWork pt60 pb60">
                <div className="container">
                    <div className="secHd">
                        <span>HOW IT WORKS</span>
                        <h2>Revup following 3 working steps</h2>
                    </div>
                    <div className="row hiwRow">
                        <div className="col-lg-4">
                            <div className="hiwItem">
                                <div className="hiwThumb">
                                    <img src={car} alt="" />
                                </div>
                                <div className="hiwDec">
                                    <h3>Choose Car</h3>
                                    <p>Donec felis neque, pellentesque vel enim at, hendrerit vulputate augue. Donec eget odio in lorem congue</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="hiwItem">
                                <div className="hiwThumb">
                                    <img src={location} alt="" />
                                </div>
                                <div className="hiwDec">
                                    <h3>Choose Car</h3>
                                    <p>Donec felis neque, pellentesque vel enim at, hendrerit vulputate augue. Donec eget odio in lorem congue</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="hiwItem">
                                <div className="hiwThumb">
                                    <img src={book} alt="" />
                                </div>
                                <div className="hiwDec">
                                    <h3>Choose Car</h3>
                                    <p>Donec felis neque, pellentesque vel enim at, hendrerit vulputate augue. Donec eget odio in lorem congue</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Faqs/>
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
            <Footer/>
        </div>
  );
}

export default Home;
