import React from 'react'
import NavBar from '../Componants/NavBar';
import SpBanner from '../images/lamborgini.png';
import Footer from '../Componants/Footer';
import ViewProfile from '../Componants/ViewProfile';
function ProfileView() {
  return (
    <div>
        <NavBar />
        <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr">                
            </div>
        </div>
        <ViewProfile />
        <Footer noTopSpace/>
    </div>
  );
}

export default ProfileView;