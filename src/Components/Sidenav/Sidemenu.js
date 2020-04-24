import React, { Component } from 'react'
import './Sidemenu.scss'
import icon1 from './portal-homeiCON-images/home.33dba9fc.svg'
import icon2 from './portal-homeiCON-images/avatar.340b0bcd.svg'
import icon3 from './portal-homeiCON-images/payment-method.0a58a70f.svg'
import icon4 from './portal-homeiCON-images/libraryIcon.258f9f66.svg'
import icon5 from './portal-homeiCON-images/bookIcon.b153bda1.svg'
import icon6 from './portal-homeiCON-images/examIcon.3df84458.svg'
import icon7 from './portal-homeiCON-images/announcements.68ac8d54.svg'
import Onenav from '../EnrolNav/Enrolnav'
import {
    
    Link
  } from "react-router-dom";


export default class SideNav extends Component {
    openNav=()=> {
        document.getElementById("mySidenav").style.width = "290px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      }
  render() {
    return (
        <div className="sidebar  ">
            <div>
                <ul className="li-parent ">
                    <li className="p-3  child-li">
                        <img src={icon1} className="icon" /> 
                        <span className="icon-text p-4 mt-5 text-white">Dashboard</span>
                    </li>
                    <li className="p-3  child-li ">
                        <img src={icon2} className="icon" /> 
                        <span className="icon-text p-4 mt-5 text-white">Profile</span>
                        <ul className="text-white sub-ul ">
                            <li className="p-3 sub-ul-li mt-3 " onClick={this.openNav}>Info</li>
                            <li className="p-3 sub-ul-li" ><Link to="/" style={{color:"white"}}>Logout</Link></li>
                            <li className="p-3 sub-ul-li"><Link to="/ChangePassword" style={{color:"white"}}>Change Password</Link></li>
                        </ul>
                    </li>
                    <li className="p-3  child-li ">
                        <img src={icon3} className="icon" /> 
                        <span className="icon-text p-4 mt-5 text-white">Payment</span>
                        <ul className="text-white sub-ul " >
                            <li className="p-3 sub-ul-li mt-3"><Link to="/PaymentStatus" style={{color:"white"}}>Payment Status</Link></li>
                        </ul>
                    </li>
                    <li className="p-3  child-li">
                        <img src={icon4} className="icon" /> 
                        <span className="icon-text p-4 mt-5 text-white"><Link to="/OnlineLectureCourse" style={{color:"white"}}>Online Lectures</Link></span>
                    </li>
                    <li className="p-3  child-li">
                        <img src={icon5} className="icon" /> 
                        <span className="icon-text p-4 mt-5 text-white">Text Books</span>
                    </li>
                    <li className="p-3  child-li">
                        <img src={icon6} className="icon" /> 
                        <span className="icon-text p-4 mt-5 text-white">Exams</span>
                    </li>
                    <li className="p-3  child-li">
                        <img src={icon7} className="icon" /> 
                        <span className="icon-text p-4 mt-5 text-white">Announcements</span>
                    </li>
                      
                      
                </ul>
            </div>
        </div>
    )
  }
}
