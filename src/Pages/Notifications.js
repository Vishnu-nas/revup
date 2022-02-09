import React from 'react'
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import NotificationView from '../Componants/NotificationView';
import SpBanner from '../images/lamborgini.png'
function Notifications() {
  return (
    <div>
        <NavBar />
        <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr">
               
            </div>
        </div>
        <NotificationView />
        <Footer noTopSpace />
    </div>
  );
}

export default Notifications;