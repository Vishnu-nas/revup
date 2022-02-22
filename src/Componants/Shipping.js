import React,{useState} from 'react'
import MasterCard from '../images/master.png'; 
function Shipping() {
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
                        <input type="radio" name="q1" id="shpp1" value="1" onChange={() => invertClass(1)} defaultChecked={extraClass === 1}/>
                    </div>  
                    <label className={"paymt " + (extraClass === 1 ? "active" : "")} for="shpp1">
                    <div className="paymt_in">
                        <div className="shipping_name">
                           <h2>Micheal Sam</h2>        
                           <p>285 Fulton St, New York, NY 10007</p>
                        </div>
                        <div className="shppg_in_btm">  
                            <div className="edit">
                                <span>
                                    Edit
                                </span>
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
                        <input type="radio" name="q1" id="shpp2" value="1" onChange={() => invertClass(1)} defaultChecked={extraClass === 1}/>
                    </div>  
                    <label className={"paymt " + (extraClass === 1 ? "active" : "")} for="shpp2">
                    <div className="paymt_in">
                        <div className="shipping_name">
                           <h2>Micheal Sam</h2>        
                           <p>285 Fulton St, New York, NY 10007</p>
                        </div>
                        <div className="shppg_in_btm">  
                            <div className="edit">
                                <span>
                                    Edit
                                </span>
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

export default Shipping;