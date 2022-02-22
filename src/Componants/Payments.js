import React,{useState} from 'react'
import MasterCard from '../images/master.png'; 
function Payments() {
    const [extraClass, setExtraClass] = useState(1);
    const invertClass = (e) => 
    {
       setExtraClass(e);
    };
  return (
    <div>
        <div className="container">
        <div className="row rowPay">
            <div className="paymt_wraper p-0">
                {/* 1 */}
                <div className= "paymt payType-item">
                    <div className="checked">
                        <input type="radio" name="q1" id="shp1" value="1" onChange={() => invertClass(1)} defaultChecked={extraClass === 1}/>
                    </div>  
                    <label className={"paymt " + (extraClass === 1 ? "active" : "")} for="shp1">
                    <div className="paymt_in">
                        <div className="paymt_in_top">
                            <div className="icon">
                                <img src={MasterCard} alt="" />  
                            </div>     
                                              
                        </div>
                        <div className="paymt_in_btm">
                            <div className="accDetail">
                                <h2>XXXX XXXX X9565</h2>
                                <div className="accText">
                                    <span>Eugene Waliance</span>
                                </div>
                            </div>
                            <div className="remove">
                                <span>
                                    Remove
                                </span>
                            </div>
                        </div>
                    </div>
                    </label>
                </div>
                {/* 2 */}
                <div className= "paymt payType-item">
                    <div className="checked">
                        <input type="radio" name="q1" id="shp2" value="2" onChange={() => invertClass(1)} defaultChecked={extraClass === 1}/>
                    </div>  
                    <label className={"paymt " + (extraClass === 1 ? "active" : "")} for="shp2">
                    <div className="paymt_in">
                        <div className="paymt_in_top">
                            <div className="icon">
                                <img src={MasterCard} alt="" />  
                            </div>     
                                              
                        </div>
                        <div className="paymt_in_btm">
                            <div className="accDetail">
                                <h2>XXXX XXXX X9565</h2>
                                <div className="accText">
                                    <span>Eugene Waliance</span>
                                </div>
                            </div>
                            <div className="remove">
                                <span>
                                    Remove
                                </span>
                            </div>
                        </div>
                    </div>
                    </label>
                </div>
            </div>
            <div className="addPayment">
                <div class="addCardBtn"><button class="acBtn"><span>+</span> ADD PAYMENT</button></div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Payments;