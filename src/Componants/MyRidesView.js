import React from 'react';
import Car1 from '../images/car1.png'
import Car2 from '../images/car2.png'
import Car3 from '../images/car3.png'
import Profile from '../images/prof.jpeg'
function MyRidesView() {
  return (
    <div className='myRidesView'>
        <div className="container">
            <div className="ridesWrapper">
                <div className="ridesHead">
                    <h1>My Rides</h1>
                </div>
                <div className="ridesList table-responsive">
                    {/*  */}
                    <table class="table table-image">
                        <tbody>
                            {/* list 1 */}
                            <tr>
                                <td class="w-25">
                                    <div className="ride-Item">
                                        <div className="product--img">
                                            <img src={Car1} alt="" />
                                        </div>                                        
                                    </div>
                                </td>
                                <td>
                                    <div className="product--name">
                                        <div className="ride--car">
                                            <span className='orderId'>ORDER # 21252265</span>
                                            <span className='orderName'>Lamborghini Aventador</span>
                                        </div>
                                        <div className="ride--date">
                                            <span>Oct 10, 10:00 am</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="Trip">                                    
                                        <div className="bdRight">                                            
                                            <div class="bdRicon">
                                                <span class="dot"></span>
                                            </div>
                                            <div className="optedItem">       
                                                <label>Start Trip:</label>                                         
                                                <h3>Oct 16</h3>
                                                <span>Saturday, 08:00 pm*</span>
                                            </div>
                                        </div> 
                                    </div>
                                </td>
                                <td>
                                    <div className="Trip">
                                        <div className="bdRight">                                            
                                            <div class="bdRicon">
                                                <span class="dot withWhite"></span>
                                            </div>
                                            <div className="optedItem"> 
                                                <label>End Trip:</label>                                               
                                                <h3>Oct 16</h3>
                                                <span>Saturday, 08:00 pm*</span>
                                            </div>
                                        </div> 
                                    </div>
                                </td>
                                <td>
                                    <div className="usedHrs">
                                        <span>
                                            <i class="fas fa-stopwatch"></i> 5 Hours
                                        </span>
                                    </div>
                                </td>
                            </tr>                            
                            {/* list 2 */}
                            <tr>
                                <td class="w-25">
                                    <div className="ride-Item">
                                        <div className="product--img">
                                            <img src={Car2} alt="" />
                                        </div>                                        
                                    </div>
                                </td>
                                <td>
                                    <div className="product--name">
                                        <div className="ride--car">
                                            <span className='orderId'>ORDER # 21252265</span>
                                            <span className='orderName'>Lamborghini Aventador</span>
                                        </div>
                                        <div className="ride--date">
                                            <span>Oct 10, 10:00 am</span>
                                        </div>
                                        <div className="ride--info">
                                            <div className="ride--info--thumb">
                                                <div className="ride--info--thumb__img">
                                                    <img src={Profile} alt="Profile" />
                                                </div>
                                            </div>
                                            <div className="ride--info--detail">
                                                <h3>Ethan Laura</h3>
                                                <span>Driver Info</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="Trip">                                    
                                        <div className="bdRight">                                            
                                            <div class="bdRicon">
                                                <span class="dot"></span>
                                            </div>
                                            <div className="optedItem">       
                                                <label>Start Trip:</label>                                         
                                                <h3>Oct 16</h3>
                                                <span>Saturday, 08:00 pm*</span>
                                            </div>
                                        </div> 
                                    </div>
                                </td>
                                <td>
                                    <div className="Trip">
                                        <div className="bdRight">                                            
                                            <div class="bdRicon">
                                                <span class="dot withWhite"></span>
                                            </div>
                                            <div className="optedItem"> 
                                                <label>End Trip:</label>                                               
                                                <h3>Oct 16</h3>
                                                <span>Saturday, 08:00 pm*</span>
                                            </div>
                                        </div> 
                                    </div>
                                </td>
                                <td>
                                    <div className="usedHrs">
                                        <span>
                                            <i class="fas fa-stopwatch"></i> 5 Hours
                                        </span>
                                    </div>
                                </td>
                            </tr>   
                            {/* list 3 */}
                            <tr className='cancelledRow'>
                                <td class="w-25">
                                    <div className="ride-Item">
                                        <div className="product--img">
                                            <img src={Car3} alt="" />
                                        </div>                                        
                                    </div>
                                </td>
                                <td>
                                    <div className="product--name">
                                        <div className="ride--car">
                                            <span className='orderId'>ORDER # 21252265</span>
                                            <span className='orderName'>Lamborghini Aventador</span>
                                        </div>
                                        <div className="ride--date">
                                            <span>Oct 10, 10:00 am</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="Trip">                                    
                                        <div className="bdRight">                                            
                                            <div class="bdRicon">
                                                <span class="dot"></span>
                                            </div>
                                            <div className="optedItem">       
                                                <label>Start Trip:</label>                                         
                                                <h3>Oct 16</h3>
                                                <span>Saturday, 08:00 pm*</span>
                                            </div>
                                        </div> 
                                    </div>
                                </td>
                                <td>
                                    <div className="Trip">
                                        <div className="bdRight">                                            
                                            <div class="bdRicon">
                                                <span class="dot withWhite"></span>
                                            </div>
                                            <div className="optedItem"> 
                                                <label>End Trip:</label>                                               
                                                <h3>Oct 16</h3>
                                                <span>Saturday, 08:00 pm*</span>
                                            </div>
                                        </div> 
                                    </div>
                                </td>
                                <td>
                                    <div className="usedHrs">
                                        <span>
                                            <i class="fas fa-stopwatch"></i> 5 Hours
                                        </span>
                                    </div>
                                </td>
                            </tr>   
                            {/* list 4 */}
                            <tr>
                                <td class="w-25">
                                    <div className="ride-Item">
                                        <div className="product--img">
                                            <img src={Car3} alt="" />
                                        </div>                                        
                                    </div>
                                </td>
                                <td>
                                    <div className="product--name">
                                        <div className="ride--car">
                                            <span className='orderId'>ORDER # 21252265</span>
                                            <span className='orderName'>Lamborghini Aventador</span>
                                        </div>
                                        <div className="ride--date">
                                            <span>Oct 10, 10:00 am</span>
                                        </div>
                                        <div className="ride--info">
                                            <div className="ride--info--status">                                                
                                                <div className="ride--info--status__left">
                                                    <span>Your Ride Completed</span>
                                                </div>
                                                <div className="ride--info--status__right">
                                                    <div class="reviewStar">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="Trip">                                    
                                        <div className="bdRight">                                            
                                            <div class="bdRicon">
                                                <span class="dot"></span>
                                            </div>
                                            <div className="optedItem">       
                                                <label>Start Trip:</label>                                         
                                                <h3>Oct 16</h3>
                                                <span>Saturday, 08:00 pm*</span>
                                            </div>
                                        </div> 
                                    </div>
                                </td>
                                <td>
                                    <div className="Trip">
                                        <div className="bdRight">                                            
                                            <div class="bdRicon">
                                                <span class="dot withWhite"></span>
                                            </div>
                                            <div className="optedItem"> 
                                                <label>End Trip:</label>                                               
                                                <h3>Oct 16</h3>
                                                <span>Saturday, 08:00 pm*</span>
                                            </div>
                                        </div> 
                                    </div>
                                </td>
                                <td>
                                    <div className="usedHrs">
                                        <span>
                                            <i class="fas fa-stopwatch"></i> 5 Hours
                                        </span>
                                    </div>
                                </td>
                            </tr> 
                        </tbody>
                    </table>   
                </div>
            </div>
        </div>
    </div>
  );
}

export default MyRidesView;
