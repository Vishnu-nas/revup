import React,{useState} from 'react';
import SpBanner from '../images/lamborgini.png';
import regBg from '../images/regImg.png';
function VerifyAccountView() {
    const [OTP, setOTP] = useState(new Array(6).fill(""));
    const handleChange = (element,index) =>{
        //console.log("element",element);
        if(isNaN(element.value)) return false;
        setOTP([...OTP.map((d,idx)=> (idx===index)? element.value : d)]);
        //console.log("element",element.nextSibiling);
        if(element.nextSibling){
            element.nextSibling.focus();
        }
    }
  return (
    <div>
         <div className="bannerSec spBanner" style={{ backgroundImage: `url('${SpBanner}')` }}>
            <div className="WrapperBnr">
               
            </div>
        </div>
        <div className="accRegistration">
            <div className="container">
                <div className="row accRow">
                    <div className="col-lg-6 colRgLeft p-0">
                        <div className="rgLeftWrap">
                            <div className="rgLcon h100">
                                <div className="rgLHd">
                                    <h2><span>Enjoy the </span> <span>Experience with us!</span></h2>
                                </div>
                                <div className="rgLimg">
                                    <img src={regBg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 colRgRight p-0 align-self-center">
                        <div className="rgRtWrap">
                            <div className="rgRtHd">
                                <h2>Verify Account</h2>
                                <span>We send a four digit verification code to +1 123456987</span>
                            </div>
                            <div action="#" class="register-form">
                                <form className="formWrap formWrap--item">
                                   {
                                       OTP.map((data,i)=>{
                                           return(
                                            <>
                                                <input 
                                                    className='otp-field'
                                                    type="text" 
                                                    name="otp"
                                                    maxLength="1"
                                                    key ={i}
                                                    value ={data}
                                                    onChange={e => handleChange(e.target,i)}
                                                    onFocus ={e => e.target.select()}
                                                />
                                            </>
                                           );
                                       })
                                   }
                                </form>                     
                                <button type="submit" class="btn">Next</button>
                                <div className="noCode">
                                    <p class="fp">Don't receive code? <a href="#">Resend</a></p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default VerifyAccountView;
