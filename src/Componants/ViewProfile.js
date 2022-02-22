import React,{useState} from 'react'
import PasswordView from './PasswordView';
import Payments from './Payments';
import ProfileDetail from './ProfileDetail';
import Shipping from './Shipping';
import {Link} from 'react-router-dom'

function ViewProfile() {
    const [toggle,setToggle] = useState(1);
    const handleToggle = (e) =>{
        console.log("test",e);
        setToggle(e);
     }
  return (
    <div>
        <div className="profileView">
            <div className="container">
                <div className="profileMainWrapper">
                <div className="row proRow">
                    <div className="col-lg-4 proLeft">
                        <div className="menuList">
                            <div 
                                className={"menuList_single " + ( toggle === 1 ? "active" : "")} 
                                onClick={() =>handleToggle(1)}
                            >
                                <span>Profile</span>
                            </div>
                            <div 
                                className={"menuList_single " + ( toggle === 2 ? "active" : "")} 
                                onClick={() =>handleToggle(2)}
                            >
                                <span>Payments</span>
                            </div>
                            <div 
                                className={"menuList_single " + ( toggle === 3 ? "active" : "")} 
                                onClick={() =>handleToggle(3)}
                            >
                                <span>Shipping</span>
                            </div>
                            <div 
                                className={"menuList_single " + ( toggle === 4 ? "active" : "")} 
                                onClick={() =>handleToggle(4)}
                            >
                                <span>Password</span>
                            </div>
                            <div className='menuList_single'>
                                <Link to="/terms" > <span>Terms</span> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 proRight">
                        <div className="loginDetail">
                            <div className={"loginPane " + ( toggle === 1 ? "active" : "")}>
                                <ProfileDetail />
                            </div>
                            <div className={"loginPane " + ( toggle === 2 ? "active" : "")}>
                                <Payments />
                            </div>
                            <div className={"loginPane " + ( toggle === 3 ? "active" : "")}>
                                <Shipping />
                            </div>
                            <div className={"loginPane " + ( toggle === 4 ? "active" : "")}>
                                <PasswordView/>
                            </div>
                            <div className={"loginPane " + ( toggle === 5 ? "active" : "")}>
                                <ProfileDetail />
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

export default ViewProfile;