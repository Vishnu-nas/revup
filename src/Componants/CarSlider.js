import React from 'react';
import Slider from "react-slick";
import Car1 from '../images/car1.png'
import Car2 from '../images/car2.png'
import Car3 from '../images/car3.png'
import { useRef } from 'react'
import {Link} from 'react-router-dom'
function CarSlider() {
    //const [current, setCurrent] = useState(0);
    const sliderRef = useRef(null);
    console.log(sliderRef.current);
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
  return (
    <div className="container">
        <div className="carSlider">
        <div className="carSlHd">
            <div className="carslHdL">
                <h2>Book Cars in and around New York City!</h2>
            </div>
            <div className="carslhdR">
                <span className="leftSl" onClick={()=>sliderRef.current.slickPrev()}><i className='fa fa-angle-left'></i></span>
                <span className="rightSl" onClick={()=>sliderRef.current.slickNext()}><i className='fa fa-angle-right'></i></span>
            </div>
        </div>
        <Slider {...settings} ref={sliderRef}>
            <div className="carSlItem">
                <div className="carSlIn">
                    <img src={Car1} alt="" />
                </div>
                <div className="carSlDec">
                    <h2>Lamborghini Aventador</h2>
                    <div className="review">
                        <span><i class="fa fa-star" aria-hidden="true"></i> 4.9 </span>
                        <span class="r-count">Reviews (254)</span>
                    </div>
                    <Link to="/login" ><button className='pickBtn'>PICK THIS CAR ($300.00/h)</button></Link>                    
                </div>
            </div>
            <div className="carSlItem">
                <div className="carSlIn">
                    <img src={Car2} alt="" />
                </div>
                <div className="carSlDec">
                    <h2>Lamborghini Aventador</h2>
                    <div className="review">
                        <span><i class="fa fa-star" aria-hidden="true"></i> 4.9 </span>
                        <span class="r-count">Reviews (254)</span>
                    </div>
                    <Link to="/login" ><button className='pickBtn'>PICK THIS CAR ($300.00/h)</button></Link> 
                </div>
            </div>
            <div className="carSlItem">
                <div className="carSlIn">
                    <img src={Car3} alt="" />
                </div>
                <div className="carSlDec">
                    <h2>Lamborghini Aventador</h2>
                    <div className="review">
                        <span><i class="fa fa-star" aria-hidden="true"></i> 4.9 </span>
                        <span class="r-count">Reviews (254)</span>
                    </div>

                    <Link to="/login" ><button className='pickBtn'>PICK THIS CAR ($300.00/h)</button></Link> 
                </div>
            </div>
            <div className="carSlItem">
                <div className="carSlIn">
                    <img src={Car1} alt="" />
                </div>
                <div className="carSlDec">
                    <h2>Lamborghini Aventador</h2>
                    <div className="review">
                        <span><i class="fa fa-star" aria-hidden="true"></i> 4.9 </span>
                        <span class="r-count">Reviews (254)</span>
                    </div>
                    <Link to="/login" ><button className='pickBtn'>PICK THIS CAR ($300.00/h)</button></Link> 
                </div>
            </div>
            <div className="carSlItem">
                <div className="carSlIn">
                    <img src={Car1} alt="" />
                </div>
                <div className="carSlDec">
                    <h2>Lamborghini Aventador</h2>
                    <div className="review">
                        <span><i class="fa fa-star" aria-hidden="true"></i> 4.9 </span>
                        <span class="r-count">Reviews (254)</span>
                    </div>
                    <Link to="/login" ><button className='pickBtn'>PICK THIS CAR ($300.00/h)</button></Link> 
                </div>
            </div>
            <div className="carSlItem">
                <div className="carSlIn">
                    <img src={Car1} alt="" />
                </div>
                <div className="carSlDec">
                    <h2>Lamborghini Aventador</h2>
                    <div className="review">
                        <span><i class="fa fa-star" aria-hidden="true"></i> 4.9 </span>
                        <span class="r-count">Reviews (254)</span>
                    </div>
                    <Link to="/login" ><button className='pickBtn'>PICK THIS CAR ($300.00/h)</button></Link> 
                </div>
            </div>
        </Slider>
    </div>
    </div>
  );
}

export default CarSlider;
