import React from 'react'
import Profile from '../images/prof.jpeg'
function ProfileDetail() {
  return (
    <div>
        <div className="profileEdit">
            <div className="editProfileBtn">
                <span>Edit Profile</span>
            </div>
        </div>
        <div className="profileHd">
            <div className="profImg">
                <img src={Profile} alt="" />
            </div>
            <div className="profRt">
                <div className="profNm">
                    <h2>Micheal John</h2>
                    <span>change Photo</span>
                </div>
            </div>
        </div>
        <div className="contactDetail">
            <div className="cdItem">
                <span>phone</span>
                <h3>(916) 563-6525</h3>
            </div>
            <div className="cdItem">
                <span>Email</span>
                <h3>mich@gmail.com</h3>
            </div>
        </div>
    </div>
  );
}

export default ProfileDetail;