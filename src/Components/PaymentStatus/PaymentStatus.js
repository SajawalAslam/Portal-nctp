import React, { Component } from 'react'
import './PaymentStatus.scss'
import EnrolNav from '../EnrolNav/Enrolnav'
import SideNav from '../Sidenav/Sidemenu'
export default class PaymentStatus extends Component {
  render() {
    return (
      <div >
          <EnrolNav/>
            <div className="side"><SideNav/></div>
          <div className="pt-5 paymenthead"><h1 className="Homepage-heading mt-5">DONE!</h1></div>
      </div>
    )
  }
}
