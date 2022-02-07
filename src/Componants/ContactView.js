import React from 'react';

function ContactView() {
  return (
    <div>
        <div className="accRegistration ContactUs">
            <div className="container">
                <div className="row accRow contactRow">                    
                    <div className="col-lg-12 colRgRight p-0 align-self-center">
                        <div className="rgRtWrap">
                            <div className="rgRtHd">
                                <h2>Your Information</h2>
                                <span>Please update your account information</span>
                            </div>
                            <div action="#" class="register-form">
                                <div className="formWrap FormRow">
                                    <div className="form-controller col-lg-6">
                                        <label htmlFor="">Name</label>
                                        <input type="text" name="fn" placeholder="First Name" />
                                    </div>
                                    <div className="form-controller col-lg-6">
                                        <label htmlFor="">Email</label>
                                        <input type="text" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-controller col-lg-6">
                                        <label htmlFor="">Phone</label>
                                        <input type="text" name="ln" placeholder="Phone" />
                                    </div>  
                                    <div className="form-controller col-lg-6">
                                        <label htmlFor="">Best time to contact</label>
                                        <div class="customs_selects">
                                            <select name="product" class="customs_sel_box">
                                                <option value="popularity">Select</option>
                                                <option value="new">new</option>
                                                <option value="low">low to high</option>
                                                <option value="high">high to low</option>
                                            </select>
                                        </div>
                                    </div>       
                                    <div className="form-controller col-lg-6">
                                        <label htmlFor="">Best time to contact</label>
                                        <div class="customs_selects">
                                            <select name="product" class="customs_sel_box">
                                                <option value="popularity">Select</option>
                                                <option value="new">new</option>
                                                <option value="low">low to high</option>
                                                <option value="high">high to low</option>
                                            </select>
                                        </div>
                                    </div>                                                           
                                    <div className="form-controller col-lg-6">
                                        <label htmlFor="">Subject</label>
                                        <input type="text" name="pw" placeholder="Subject" />
                                    </div>
                                    <div className="form-controller col-lg-12 p-0">
                                        <label htmlFor="">Message</label>
                                        <textarea name="" id="" cols="30" >

                                        </textarea>
                                    </div>   
                                </div>
                                <button type="submit" class="btn contactBtn">SUBMIT</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ContactView;
