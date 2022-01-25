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
import car from '../images/car.png'
import location from '../images/location.png'
import book from '../images/book.png'
import Faqs from '../Componants/Faqs';
import NavBar from '../Componants/NavBar'
import CarSlider from '../Componants/CarSlider'
import Footer from '../Componants/Footer'
import ShopCta from '../Componants/ShopCta';
import GadgetCta from '../Componants/GadgetCta';
import BookCabCta from '../Componants/BookCabCta';
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
            <BookCabCta />
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
            <GadgetCta />
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
            <ShopCta />
            <Footer/>
        </div>
  );
}

export default Home;
