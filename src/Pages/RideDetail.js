import React from 'react';
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import RideDetailView from '../Componants/RideDetailView';
function RideDetail() {
  return (
    <div>
      <NavBar />
        <RideDetailView />
        <Footer noTopSpace />
    </div>
  );
}

export default RideDetail;
