import React, { Component } from 'react'
import EnrolNav from '../EnrolNav/Enrolnav'
import './enrol.scss'
import {
    
  Link
} from "react-router-dom";

export default class EnrollCourses extends Component {
  render() {
    return (
      <div>
        <EnrolNav/>
        <section className=" pb-5">
          <div className="container  ">
            <div className="row pt-5">
              <div className="col-sm-1 col-md-2"></div>
              <div className="col-sm-10 col-md-8">
                <p className="text-center text-danger font-weight-bold">For questions, please contact us at the NCTP helpline: 0308-222-0203 (also available on WhatsApp) between 10 AM - 6 PM. Please note we are closed on Fridays.</p>
              </div>
              <div className="col-sm-1 col-md-2"></div>
            </div>
            <div className="border rounded mt-4 p-3 " style={{backgroundColor:'lightgrey'}}>
                <p className="text-center text-danger font-weight-bolder"><b>STAY HOME, STAY SAFE, AND LEARN TO EARN BY DEVELOPING SOFTWARE</b></p>
                <p className=" text-danger font-weight-bold">Due to (COVID-19) coronavirus pandemic PIAIC has opened online admissions for all Pakistanis and waived the fees of 1st quarter, also there will be no entry test. Just apply in any course according to your city and generate voucher of zero cost for online, you don't need to submit voucher and there is not any further process. After voucher generation wait for 24 to 36 hours and your status will be updated then you can watch online videos at you own time.</p>
            </div>
            <div className="courses">
              <h1 className="text-center display-3 mt-4 mb-4">My Courses</h1>
              <div className="d-flex mt-5 flex-wrap justify-content-center">
                <div class="card mr-3" style={{width: '18rem'}}>
                  <div class="card-body text-center">
                    <h5 class="card-title">Cloud Native and Mobile Web Computing (CNC)</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Status &nbsp; <span class="badge badge-info">LEARNING</span></h6>
                    <p class="card-text">A one year Cloud Computing program designed for absolute beginners....</p>
                    <div className="d-flex justify-content-center">
                            <Link to="/Home" class="AdminLogin-submit-button AdminLogin-m-r-l">Open portal</Link>
                    </div>
                  </div>
                </div>
                <div class="card mr-3" style={{width: '18rem'}}>
                  <div class="card-body text-center">
                    <h5 class="card-title">Cloud Native and Mobile Web Computing (CNC)</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Status &nbsp; <span class="badge badge-info">LEARNING</span></h6>
                    <p class="card-text">A one year Cloud Computing program designed for absolute beginners....</p>
                    <div className="d-flex justify-content-center">
                            <Link to="/Home" class="AdminLogin-submit-button AdminLogin-m-r-l">Open portal</Link>
                    </div>
                  </div>
                </div>


                <div class="card mr-3" style={{width: '18rem'}}>
                  <div class="card-body text-center">
                    <h5 class="card-title">Cloud Native and Mobile Web Computing (CNC)</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Status &nbsp; <span class="badge badge-info">LEARNING</span></h6>
                    <p class="card-text">A one year Cloud Computing program designed for absolute beginners....</p>
                    <div className="d-flex justify-content-center">
                            <Link to="/Home" class="AdminLogin-submit-button AdminLogin-m-r-l">Open portal</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
