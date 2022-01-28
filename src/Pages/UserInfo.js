import React from 'react';
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import UserInfoView from '../Componants/UserInfoView';
function UserInfo() {
  return (
    <div>
        <NavBar />
        <UserInfoView />
        <Footer/>
    </div>
  );
}

export default UserInfo;
