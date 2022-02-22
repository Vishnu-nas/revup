import React from 'react'
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
import SpBanner from '../images/lamborgini.png';
function Terms() {
  return (
    <>
        <NavBar />
        <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr">                
            </div>
        </div>
       <div className="container">
            <div className="termWrap">
                <h1>Terms</h1>
                <div className="termsDec">
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
       </div>
       <Footer noTopSpace/>
    </>
  );
}

export default Terms;