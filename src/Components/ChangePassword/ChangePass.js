import React, { Component } from 'react'
import './Changepass.scss'
import EnrolNav from '../EnrolNav/Enrolnav'
import SideNav from '../Sidenav/Sidemenu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class ChangePass extends Component {
  render() {
    return (
      // <Router>
        <div >
            <EnrolNav/>
            <div className="side"><SideNav/></div>
            <div class="Homepage-heading pt-5">Change Password</div>
            
            <div class="pt-5"><div class="ChangePassword-from-div"><br /><form class="AdminLogin-form" >
            
            <div class="AdminLogin-form-group"><label class="AdminLogin-text-light-green">Enter Old Password</label><input class="form-control" type="password" placeholder="Old Password" autocomplete="on" value="" />
            
            </div><br /><div class="AdminLogin-form-group"><label class="AdminLogin-text-light-green">Enter New Password</label><input class="form-control" type="password" placeholder="New Password" autocomplete="on" value="" />
            
            </div><br /><div class="form-group"><label class="AdminLogin-text-light-green">Confirm Password</label><input class="form-control" type="password" placeholder="Confirm Password" autocomplete="on" value="" /></div>
            
            <button type="submit" class="AdminLogin-submit-button AdminLogin-m-r-l">Change Password</button>
            
            </form></div></div></div>
            // </Router>
            
    )
  }
}
