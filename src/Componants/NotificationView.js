import React from 'react'
import Profile from '../images/prof.jpeg'

function NotificationView() {
  return (
    <div>
        <div className="notificationView">
            <div className="container">
               <div className="nvWrap">
                    <div className="nvhd">
                        <div className="allRead">
                            <span>All Read</span>
                        </div>
                    </div>
                    <div className="nvRow">
                        <div className="nvIcon">
                            <div className="nvImg">
                                <img src={Profile} alt="" />
                            </div>
                        </div>
                        <div className="nvDec">
                            <h2>Driver has been assigned to your ride</h2>
                            <span className='nvId'># 21252265</span>
                            <span className='nvTime'>2 min ago</span>
                        </div>
                    </div>
                    <div className="nvRow">
                        <div className="nvIcon">
                            <div className="nvImg">
                                <img src={Profile} alt="" />
                            </div>
                        </div>
                        <div className="nvDec">
                            <h2>Driver has been assigned to your ride</h2>
                            <span className='nvId'># 21252265</span>
                            <span className='nvTime'>2 min ago</span>
                        </div>
                    </div>
                    <div className="nvRow">
                        <div className="nvIcon">
                            <div className="nvImg">
                                <img src={Profile} alt="" />
                            </div>
                        </div>
                        <div className="nvDec">
                            <h2>Driver has been assigned to your ride</h2>
                            <span className='nvId'># 21252265</span>
                            <span className='nvTime'>2 min ago</span>
                        </div>
                    </div>
                    <div className="nvRow">
                        <div className="nvIcon">
                            <div className="nvImg">
                                <img src={Profile} alt="" />
                            </div>
                        </div>
                        <div className="nvDec">
                            <h2>Driver has been assigned to your ride</h2>
                            <span className='nvId'># 21252265</span>
                            <span className='nvTime'>2 min ago</span>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
  );
}

export default NotificationView;